import { User } from "../entities/User";
import {
    Arg,
    Ctx,
    Field,
    Mutation,
    ObjectType,
    Query,
    Resolver,
} from "type-graphql";
import { MyContext } from "../types";
import argon2 from "argon2";
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants";
import { UsernamePasswordInput } from "./UsernamePasswordInput";
import { validateRegister } from "../utils/validateRegister";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from "uuid";
import { getConnection } from "typeorm";
// import { EntityManager } from "@mikro-orm/postgresql";

@ObjectType()
class FieldError {
    @Field()
    field: string;
    @Field()
    message: string;
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];
    @Field(() => User, { nullable: true })
    user?: User;
}

@Resolver()
export class UserResolver {
    @Mutation(() => UserResponse)
    async changePassword(
        @Arg("token") token: string,
        @Arg("newPassword") newPassword: string,
        // @Ctx() { redis, em, req }: MyContext
        @Ctx() { redis, req }: MyContext
    ): Promise<UserResponse> {
        if (newPassword.length <= 2) {
            return {
                errors: [
                    {
                        field: "newPassword",
                        message: "length must greater than 3",
                    },
                ],
            };
        }

        const key = FORGET_PASSWORD_PREFIX + token;
        const userId = await redis.get(key);

        if (!userId) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "token expired",
                    },
                ],
            };
        }

        // const user = await em.findOne(User, { id: parseInt(userId) });
        const userIdNum = parseInt(userId);
        const user = await User.findOne(userIdNum);

        if (!user) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "user no longer exists",
                    },
                ],
            };
        }

        // user.password = await argon2.hash(newPassword);
        // await em.persistAndFlush(user);

        await User.update(
            { id: userIdNum },
            { password: await argon2.hash(newPassword) }
        );

        // delete key from redis so same token cant change the same pwd again
        redis.del(key);

        // log in user after pwd changed
        req.session.userId = user.id;

        return { user };
    }

    @Mutation(() => Boolean)
    async forgotPassword(
        @Arg("email") email: string,
        // @Ctx() { em, redis }: MyContext
        @Ctx() { redis }: MyContext
    ) {
        // const user = await em.findOne(User, { email });
        const user = await User.findOne({ where: { email } }); // search the column that isnt pk
        if (!user) {
            return true;
        }

        const token = v4();

        await redis.set(
            FORGET_PASSWORD_PREFIX + token,
            user.id,
            "ex",
            1000 * 60 * 60 * 24 * 3 // 3 days
        );

        await sendEmail(
            email,
            `<a href="http://localhost:3000/change-password/${token}">reset password</a>`
        );

        return true;
    }

    @Query(() => User, { nullable: true })
    // async me(@Ctx() { req, em }: MyContext) {
    async me(@Ctx() { req }: MyContext) {
        // you are not log in
        if (!req.session.userId) {
            return null;
        }
        // const user = await em.findOne(User, { id: req.session.userId });
        const user = await User.findOne(req.session.userId);
        return user;
    }

    @Mutation(() => UserResponse)
    async register(
        @Arg("options") options: UsernamePasswordInput,
        @Ctx() { req }: MyContext
    ): Promise<UserResponse> {
        const errors = validateRegister(options);
        if (errors) {
            return { errors };
        }
        const hashedPassword = await argon2.hash(options.password);

        // const user = em.create(User, {
        //     email: options.email,
        //     username: options.username,
        //     password: hashedPassword,
        // }); //在影片3:07:58這附近，作者在前端出了點問題，於是決定不用內建em，而用@mikro-orm/posgresql的EnityBuilder當em

        let user;
        try {
            // const result = await (em as EntityManager)
            //     .createQueryBuilder(User)
            //     .getKnexQuery()
            //     .insert({
            //         username: options.username,
            //         email: options.email,
            //         password: hashedPassword,
            //         create_at: new Date(),
            //         update_at: new Date(),
            //     })
            //     .returning("*");
            // user = result[0]; //這裡是作者改掉的示範，但我跑起來沒問題，就不改了

            // await em.persistAndFlush(user);
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({
                    username: options.username,
                    email: options.email,
                    password: hashedPassword,
                })
                .returning("*")
                .execute();
            // User.create({}).save(); //上面等同這句
            user = result.raw[0];
        } catch (err) {
            console.log(err);
            if (err.code === "23505") {
                return {
                    errors: [
                        {
                            field: "username",
                            message: "username has already been taken",
                        },
                    ],
                };
            }
        }

        // this will auto log user in after register
        req.session.userId = user.id;

        return { user };
    }

    @Mutation(() => UserResponse)
    async login(
        // @Arg("options") options: UsernamePasswordInput,
        @Arg("usernameOrEmail") usernameOrEmail: string,
        @Arg("password") password: string,

        @Ctx() { req }: MyContext
    ): Promise<UserResponse> {
        // const user = await em.findOne(
        //     User,
        //     usernameOrEmail.includes("@")
        //         ? { email: usernameOrEmail }
        //         : { username: usernameOrEmail }
        // );
        const user = await User.findOne(
            User,
            usernameOrEmail.includes("@")
                ? { where: { email: usernameOrEmail } }
                : { where: { username: usernameOrEmail } }
        );
        if (!user) {
            return {
                errors: [
                    {
                        field: "usernameOrEmail",
                        message: "cannot find this username",
                    },
                ],
            };
        }
        const valid = await argon2.verify(user.password, password);
        if (!valid) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "password incorrect",
                    },
                ],
            };
        }

        req.session!.userId = user.id;

        return {
            user,
        };
    }
    @Mutation(() => Boolean)
    logout(@Ctx() { req, res }: MyContext) {
        return new Promise((resolve) => {
            req.session.destroy((err: any) => {
                // 這行destroy的session是在redis上的
                res.clearCookie(COOKIE_NAME);
                if (err) {
                    console.log(err);
                    resolve(false);
                    return;
                }
                resolve(true);
            });
        });
    }
}

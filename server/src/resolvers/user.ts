import { User } from "../entities/User";
import {
    Arg,
    Ctx,
    Field,
    InputType,
    Mutation,
    ObjectType,
    Query,
    Resolver,
} from "type-graphql";
import { MyContext } from "../types";
import argon2 from "argon2";
import { EntityManager } from "@mikro-orm/postgresql";

// 除了打一堆Arg()的另一種方式
@InputType()
class UsernamePassworgInput {
    @Field()
    username: string;
    @Field()
    password: string;
}

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
    @Query(() => User, { nullable: true })
    async me(@Ctx() { req, em }: MyContext) {
        // you are not log in
        if (!req.session.userId) {
            return null;
        }
        const user = await em.findOne(User, { id: req.session.userId });
        return user;
    }

    @Mutation(() => UserResponse)
    async register(
        @Arg("options") options: UsernamePassworgInput,
        @Ctx() { em, req }: MyContext
    ): Promise<UserResponse> {
        if (options.username.length <= 2) {
            return {
                errors: [
                    {
                        field: "username",
                        message: "length must greater than 3",
                    },
                ],
            };
        }
        const hashedPassword = argon2.hash(options.password);
        const user = em.create(User, {
            username: options.username,
            password: hashedPassword,
        }); //在影片3:07:58這附近，作者在前端出了點問題，於是決定不用內建em，而用@mikro-orm/posgresql的EnityBuilder當em
        // let user;
        try {
            // const result = await (em as EntityManager)
            //     .createQueryBuilder(User)
            //     .getKnexQuery()
            //     .insert({
            //         username: options.username,
            //         password: hashedPassword,
            //         created_at: new Date(),
            //         updated_at: new Date(),
            //     })
            //     .returning("*");
            // user = result[0];  //這裡是作者改掉的示範，但我跑起來沒問題，就不改了
            await em.persistAndFlush(user);
        } catch (err) {
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
        @Arg("options") options: UsernamePassworgInput,
        @Ctx() { em, req }: MyContext
    ): Promise<UserResponse> {
        const user = await em.findOne(User, { username: options.username });
        if (!user) {
            return {
                errors: [
                    {
                        field: "username",
                        message: "cannot find this username",
                    },
                ],
            };
        }
        const valid = await argon2.verify(user.password, options.password);
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
}

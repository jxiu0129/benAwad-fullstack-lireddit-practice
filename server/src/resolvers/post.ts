import { Post } from "../entities/Post";
import { MyContext } from "../types";
import {
    Arg,
    Ctx,
    Field,
    InputType,
    Int,
    Mutation,
    Query,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import { sleep } from "../utils/sleep";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";

@InputType()
class PostInput {
    @Field()
    title: string;
    @Field()
    text: string;
}

@Resolver()
export class PostResolver {
    @Query(() => [Post]) // query 是用來get
    // async posts(@Ctx() ctx: MyContext): Promise<Post[]> {
    async posts(
        @Arg("limit", () => Int) limit: number, // Int不宣告，會被編譯成float
        // @Arg('offset') offset: number, //6:35:10解釋whynot
        @Arg("cursor", () => String, { nullable: true }) cursor: string | null // 如果有設說nullable，Arg就要另外宣告型別，正常情框下他會自己幫你設好
    ): Promise<Post[]> {
        // await sleep(3000); 示範ssr用的
        // return ctx.em.find(Post, {});

        // return Post.find();

        const realLimit = Math.min(50, limit);
        const qb = getConnection()
            .getRepository(Post)
            .createQueryBuilder("p") // alias
            .orderBy('"createAt"', "DESC") // 不double quote，postgres會自動幫你把A轉小，會error
            .take(realLimit); // limit
        if (cursor) {
            qb.where('"createAt" < :cursor', {
                cursor: new Date(parseInt(cursor)),
            });
        }
        return qb.getMany();
    }

    @Query(() => Post, { nullable: true })
    post(
        // @Arg("id", () => Int) id: number, //前面()=>id是typegraphql需要的型別，後面是ts需要的。上面下面都一樣
        @Arg("id") id: number
        // ): Promise<Post | null> {
    ): Promise<Post | undefined> {
        // return em.findOne(Post, { id });
        return Post.findOne(id);
    }

    @Mutation(() => Post) //mutation => insert, update, delete
    @UseMiddleware(isAuth)
    async createPost(
        @Arg("input") input: PostInput,
        // @Arg("title", () => String) title: string,
        // @Arg('title') title: string, 這行同上一行，graphql有些會自動去抓ts的型別，
        // @Ctx() { em }: MyContext
        @Ctx() { req }: MyContext
    ): Promise<Post> {
        // const post = em.create(Post, { title });
        // await em.persistAndFlush(post);
        // return post;

        // if(!req.session.userId) {  因為有上面的UseMiddleware所以就不用了
        //     throw new Error("not authenticated")
        // }

        return Post.create({
            ...input,
            creatorId: req.session.userId,
        }).save(); // 2 queries
    }

    @Mutation(() => Post, { nullable: true }) //mutation => insert, update, delete
    async updatePost(
        @Arg("id") id: number,
        @Arg("title", () => String, { nullable: true }) title: string
        // @Ctx() { em }: MyContext
    ): Promise<Post | null> {
        // const post = await em.findOne(Post, { id });
        // if (!post) {
        //     return null;
        // }
        // if (typeof post.title !== "undefined") {
        //     post.title = title;
        //     await em.persistAndFlush(post);
        // }
        // return post;
        const post = await Post.findOne(id); // findOne(id) === findOne({where : { id }}), because id 是 primaryKey
        if (!post) {
            return null;
        }
        if (typeof title !== "undefined") {
            await Post.update({ id }, { title });
        }
        return post;
    }

    @Mutation(() => Boolean)
    async deletePost(
        @Arg("id") id: number
        // @Ctx() { em }: MyContext
    ): Promise<boolean> {
        // await em.nativeDelete(Post, { id });
        await Post.delete(id);
        return true;
    }
}
function inputField() {
    throw new Error("Function not implemented.");
}

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
    async posts(): Promise<Post[]> {
        await sleep(3000);
        // return ctx.em.find(Post, {});
        return Post.find();
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

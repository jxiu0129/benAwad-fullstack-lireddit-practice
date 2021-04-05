import { Post } from "../entities/Post";
import { MyContext } from "../types";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver{
    @Query(() => [Post]) // query 是用來get
    posts(@Ctx() ctx: MyContext): Promise<Post[]> {
        return ctx.em.find(Post, {});
    }

    @Query(() => Post, {nullable: true})
    post(
        @Arg('id', () => Int) id: number, //前面()=>id是typegraphql需要的型別，後面是ts需要的。上面下面都一樣
        @Ctx() { em }: MyContext
    ): Promise<Post | null> {
        return em.findOne(Post, { id });
    }

    @Mutation(() => Post) //mutation => insert, update, delete
    async createPost(
        @Arg('title', () => String) title: string,
        // @Arg('title') title: string, 這行同上一行，graphql有些會自動去抓ts的型別，
        @Ctx() { em }: MyContext
    ): Promise<Post> {
        const post = em.create(Post, { title });
        await em.persistAndFlush(post)
        return post;
    }

    @Mutation(() => Post, { nullable: true }) //mutation => insert, update, delete
    async updatePost(
        @Arg('id') id: number,
        @Arg('title', () => String, { nullable: true }) title: string,
        @Ctx() { em }: MyContext
    ): Promise<Post | null> {
        const post = await em.findOne(Post, { id });
        if (!post) {
            return null;
        }
        if (typeof post.title !== 'undefined') {
            post.title = title;
            await em.persistAndFlush(post);
        }
        return post;
    }

    @Mutation(() => Boolean) 
    async deletePost(
        @Arg('id') id: number,
        @Ctx() { em }: MyContext
    ): Promise<boolean> {
        await em.nativeDelete(Post, { id });
        return true;
    }
}
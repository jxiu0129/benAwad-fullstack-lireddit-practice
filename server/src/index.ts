import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";

const main = async () => {
    const orm = await MikroORM.init(mikroConfig); //connect orm
    await orm.getMigrator().up(); // run migration

    // const post = orm.em.create(Post, {title: 'my first post'});
    // await orm.em.persistAndFlush(post);
    // console.log('-----sql2-----'); 以上是先創建class宣告entity 以下是示範不宣告class的native sql用法
    // await orm.em.nativeInsert(Post, {title: 'my first post 2'});

    // const posts = await orm.em.find(Post, {});
    // console.log(posts); 這兩行是示範如何select
    const app = express();

    // app.get('/', (_, res) => { // ignore的 param 可以用_代替
    //     res.send('hello');
    // }) 這段是傳統 RESTful api 示範

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false,
        }),
    });

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log('server listening on localhost:4000')
    })
};

main().catch(err => {
    console.error(err);
});
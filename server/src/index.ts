import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
// import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";

import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import { MyContext } from "./types";

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

    const RedisStore = connectRedis(session);
    const redisClient = redis.createClient();

    app.use(
        session({
            name: "qid", // cookie name
            store: new RedisStore({
                client: redisClient,
                disableTouch: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, //10 years
                httpOnly: true,
                secure: __prod__, //cookie only works in https
                sameSite: "lax", // csrf
            },
            saveUninitialized: false,
            secret: "jxiu0129",
            resave: false,
        })
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver, UserResolver],
            validate: false,
        }),
        context: ({ req, res }): MyContext => ({ em: orm.em, req, res }),
    });

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log("server listening on localhost:4000");
    });
};

main().catch((err) => {
    console.error(err);
});

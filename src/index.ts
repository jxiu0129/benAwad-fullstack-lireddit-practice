import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";


const main = async () => {
    const orm = await MikroORM.init(mikroConfig); //connect orm
    await orm.getMigrator().up(); // run migration
    // const post = orm.em.create(Post, {title: 'my first post'});
    // await orm.em.persistAndFlush(post);
    // console.log('-----sql2-----'); 以上是先創建class宣告entity 以下是示範不宣告class的native sql用法
    // await orm.em.nativeInsert(Post, {title: 'my first post 2'});

    // const posts = await orm.em.find(Post, {});
    // console.log(posts); 這兩行是示範如何select
};

main().catch(err => {
    console.error(err);
});
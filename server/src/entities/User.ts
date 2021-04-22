// import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

import { OneToMany } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Post } from "./Post";

// 以下助解掉的是mikroORM
@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field()
    // @PrimaryKey()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    // @Property({ type: "text", unique: true })
    @Column({ unique: true })
    username!: string;

    @Field()
    // @Property({ type: "text", unique: true })
    @Column({ unique: true })
    email!: string;

    // @Field() 不打field，在graphQL就不會被顯示，安全用
    // @Property({ type: "text" })
    @Column()
    password!: string;

    @OneToMany(() => Post, (post) => post.creator)
    posts: Post[];

    @Field(() => String)
    // @Property({ type: "date" })
    @CreateDateColumn()
    // createAt = new Date();
    createAt: Date;

    @Field(() => String)
    // @Property({ type: "date", onUpdate: () => new Date() })
    @UpdateDateColumn()
    updateAt: Date;
}

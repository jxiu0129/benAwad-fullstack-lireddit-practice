// see the original mikroORM in User
import { ManyToOne } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
    // extend BaseEntity 可以用 Post.insert() Post.select()
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    title!: string;

    @Field()
    @Column()
    text!: string;

    @Field()
    @Column({ type: "int", default: 0 })
    points!: number;

    // 一個使用者會有多個posts，User那邊也要設
    @ManyToOne(() => User, (user) => user.posts)
    creator: User;

    @Field()
    @Column()
    creatorId: number;

    @Field(() => String)
    @CreateDateColumn()
    createAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updateAt: Date;
}

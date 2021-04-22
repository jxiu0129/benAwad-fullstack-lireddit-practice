// see the original mikroORM in User
import { Field, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
    // extend BaseEntity 可以用 Post.insert() Post.select()
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @CreateDateColumn()
    createAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updateAt: Date;

    @Field()
    @Column()
    title!: string;
}

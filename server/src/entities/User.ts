import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User {
    @Field()
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property({ type: "date" })
    createAt = new Date();

    @Field(() => String)
    @Property({ type: "date", onUpdate: () => new Date() })
    updateAt = new Date();

    @Field()
    @Property({ type: "text", unique: true })
    username!: string;

    @Field()
    @Property({ type: "text", unique: true })
    email!: string;

    // @Field() 不打field，在graphQL就不會被顯示，安全用
    @Property({ type: "text" })
    password!: string;
}

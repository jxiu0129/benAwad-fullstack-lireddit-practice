import { Field, InputType } from "type-graphql";

// 除了打一堆Arg()的另一種方式

@InputType()
export class UsernamePasswordInput {
    @Field()
    email: string;
    @Field()
    username: string;
    @Field()
    password: string;
}

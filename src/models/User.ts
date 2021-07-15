import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  _id: string;

  @Field(() => Number)
  index: string;

  @Field(() => String)
  picture: string;

  @Field(() => Number)
  age: string;

  @Field(() => String)
  eyeColor: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  company: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phone: string;

  @Field(type => [User])
  friends: [User]

}

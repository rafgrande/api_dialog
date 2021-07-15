import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../models/User"

import db from "../db/data.json"

@Resolver()
export class UserResolver {
    @Query(() => [User])
    Users(@Arg("term", {defaultValue: ""}) term: string) {
        return db.filter( (user) => {
            return user.name.includes(term)
        })
    };

    @Query(() => User)
    User(@Arg("_id") _id: string) {
        return db.filter( (user) => {
            return user._id === _id 
        })[0]
    };

}
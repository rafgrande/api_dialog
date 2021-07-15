import  dotenv from 'dotenv';

import "reflect-metadata";
import { ApolloServer } from "apollo-server";

import { buildSchema } from "type-graphql"

import { UserResolver } from "./resolvers/UserResolver"

dotenv.config();

async function main() {
  const schema = await buildSchema({
      resolvers: [UserResolver]
  });

  const server = new ApolloServer({ schema })
  await server.listen(process.env.PORT || 4000)
  console.log("Server has started!")
}

main();
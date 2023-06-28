import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schemas/schema.js";
import { resolvers } from "./resolvers/resolvers.js";

const port = process.env.PORT ?? 9090;

const server = new ApolloServer({ resolvers, typeDefs });

server
  .listen({ port }, () => {
    console.log(`Server runs at: http://localhost:${port}`);
  })
  .catch((e) => {
    console.log(e);
  });

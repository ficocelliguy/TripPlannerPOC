const { ApolloServer } = require("apollo-server")
const { typeDefs } = require("./server/schemas/schema.js")
const { resolvers } = require("./server/resolvers/resolvers.js")

const port = process.env.PORT || 9090;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port },
    () => console.log(`Server runs at: http://localhost:${port}`)
)
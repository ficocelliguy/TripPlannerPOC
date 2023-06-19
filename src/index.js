import { ApolloServer } from 'apollo-server'
import { typeDefs } from './server/schemas/schema.js'
import { resolvers } from './server/resolvers/resolvers.js'

const port = process.env.PORT || 9090

const server = new ApolloServer({ resolvers, typeDefs })

server.listen({ port },
  () => console.log(`Server runs at: http://localhost:${port}`)
)

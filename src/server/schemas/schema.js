import { gql } from "apollo-server";

export const typeDefs = gql`
  type Data {
    id: ID!
    name: String!
  }

  type Query {
    allData: [Data!]!
    data(id: ID!): Data
  }

  type Mutation {
    registerData(name: String!): Data!
    updateData(id: ID!, name: String!): Data!
  }
`;

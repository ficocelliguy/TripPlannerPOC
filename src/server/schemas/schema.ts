import { gql } from "apollo-server";

export const typeDefs = gql`
  type Point {
    id: ID!
    lat: String!
    lng: String!
  }
  type Location {
    id: ID!
    pointId: String!
    name: String
    description: String
    url: String
    image: String
  }

  type Query {
    allPoints: [Point!]!
    point(id: ID!): Point
    allLocations: [Location!]!
    location(id: ID!): Location
  }

  type Mutation {
    registerPoint(lat: String!, lng: String!): Point!
    updatePoint(id: ID!, lat: String!, lng: String!): Point!
    registerLocation(
      pointId: String!
      name: String
      description: String
      url: String
      image: String
    ): Location!
    updateLocation(
      id: ID!
      pointId: String
      name: String
      description: String
      url: String
      image: String
    ): Location!
  }
`;

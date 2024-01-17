import { gql } from "apollo-server";

export const typeDefs = gql`
  type point {
    id: ID!
    lat: String!
    lng: String!
    location: [location]
  }
  type location {
    id: ID!
    point: point
    pointId: String!
    name: String
    description: String
    url: String
    image: String
  }

  type Query {
    allPoints: [point!]!
    point(id: ID!): point
    allLocations: [location!]!
    location(id: ID!): location
  }

  type Mutation {
    registerPoint(lat: String!, lng: String!): point!
    updatePoint(id: ID!, lat: String!, lng: String!): point!
    registerLocation(
      pointId: String!
      name: String
      description: String
      url: String
      image: String
    ): location!
    updateLocation(
      id: ID!
      pointId: String
      name: String
      description: String
      url: String
      image: String
    ): location!
  }
`;

import { gql } from "graphql-tag";

export const RegisterLocation = gql`
  mutation Mutation(
    $pointId: String!
    $name: String
    $description: String
    $url: String
    $image: String
  ) {
    registerLocation(
      pointId: $pointId
      name: $name
      description: $description
      url: $url
      image: $image
    ) {
      description
      id
      image
      name
      point {
        lat
        lng
      }
      url
    }
  }
`;

export const UpdateLocation = gql`
  mutation Mutation(
    $updateLocationId: ID!
    $pointId: String
    $name: String
    $description: String
    $url: String
    $image: String
  ) {
    updateLocation(
      id: $updateLocationId
      pointId: $pointId
      name: $name
      description: $description
      url: $url
      image: $image
    ) {
      description
      id
      image
      name
      point {
        lat
        lng
      }
      url
    }
  }
`;

export const RegisterPoint = gql`
  mutation Mutation($lat: String!, $lng: String!) {
    registerPoint(lat: $lat, lng: $lng) {
      lat
      lng
      id
    }
  }
`;

export const UpdatePoint = gql`
  mutation Mutation($updatePointId: ID!, $lat: String!, $lng: String!) {
    updatePoint(id: $updatePointId, lat: $lat, lng: $lng) {
      lat
      lng
      id
    }
  }
`;

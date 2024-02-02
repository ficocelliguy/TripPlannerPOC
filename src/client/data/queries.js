import { gql } from "graphql-tag";

export const AllLocations = gql`
  {
    allLocations {
      id
      point {
        id
        lat
        lng
      }
      name
      description
      url
      image
    }
  }
`;

export const AllPoints = gql`
  {
    allPoints {
      id
      lat
      lng
    }
  }
`;

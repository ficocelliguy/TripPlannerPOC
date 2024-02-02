import { gql } from "graphql-tag";

export const LocationData = {
  methods: {
    async getAllLocations() {
      await this.$apollo.query({
        query: gql`
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
        `,
      });
    },
    async getAllPoints() {
      await this.$apollo.query({
        query: gql`
          {
            allPoints {
              id
              lat
              lng
            }
          }
        `,
      });
    },
  },
};

import { AllLocations, AllPoints } from "./queries.js";
import { UpdateLocation } from "./mutations.js";

export const LocationData = {
  methods: {
    async getAllLocations() {
      await this.$apollo.query({
        query: AllLocations,
      });
    },
    async getAllPoints() {
      await this.$apollo.query({
        query: AllPoints,
      });
    },
    async updateLocation(
      updateLocationId,
      pointId,
      name,
      description,
      url,
      image
    ) {
      await this.$apollo.mutate({
        mutation: UpdateLocation,
        variables: {
          updateLocationId,
          pointId,
          name,
          description,
          url,
          image,
        },
      });
    },
  },
};

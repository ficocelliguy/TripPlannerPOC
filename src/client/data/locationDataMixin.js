import { AllLocations, AllPoints } from "./queries.ts";
import {
  RegisterLocation,
  RegisterPoint,
  UpdateLocation,
} from "./mutations.ts";

export const LocationData = {
  methods: {
    async getAllLocations() {
      const response = await this.$apollo.query({
        query: AllLocations,
        fetchPolicy: "no-cache",
      });
      return response.data.allLocations;
    },
    async getAllPoints() {
      const response = await this.$apollo.query({
        query: AllPoints,
        fetchPolicy: "no-cache",
      });
      return response.data.allPoints;
    },
    async updateLocation(
      updateLocationId,
      pointId,
      name,
      description,
      url,
      image
    ) {
      return this.$apollo.mutate({
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
    async registerLocation(pointId, name, description, url, image) {
      return this.$apollo.mutate({
        mutation: RegisterLocation,
        variables: {
          pointId,
          name,
          description,
          url,
          image,
        },
      });
    },
    async registerPoint(lat, lng) {
      return this.$apollo.mutate({
        mutation: RegisterPoint,
        variables: {
          lat: `${lat}`,
          lng: `${lng}`,
        },
      });
    },
  },
};

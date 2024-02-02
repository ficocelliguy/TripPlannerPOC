import { AllLocations, AllPoints } from "./queries.js";

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
  },
};

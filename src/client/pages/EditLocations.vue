<template>
  <!-- eslint-disable vue/v-slot-style -->
  <h1 class="text-3xl font-bold underline">Edit Data!</h1>
  <ApolloQuery :query="AllLocations()">
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <div
          v-for="location in data.allLocations"
          :key="location.id"
          class="p-3"
        >
          <div>Name: {{ location.name }}</div>
          <div>Description: {{ location.description }}</div>
          <div>Url: {{ location.url }}</div>
          <div>Image: {{ location.image }}</div>
          <div>Lat: {{ location.point.lat }}</div>
          <div>Lng: {{ location.point.lng }}</div>
        </div>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
import { AllLocations } from "../data/queries.js";
import { LocationData } from "../data/locationDataMixin.js";

export default {
  mixins: [LocationData],
  data: function () {
    return {
      locations: null,
    };
  },
  methods: {
    AllLocations() {
      return AllLocations;
    },
  },
};
</script>

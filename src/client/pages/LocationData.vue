<template>
  <!-- eslint-disable vue/v-slot-style -->
  <h1 class="text-3xl font-bold underline">Edit Data!</h1>
  <ApolloQuery :query="AllLocations()">
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred.</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <div
          v-for="location in data.allLocations"
          :key="location.id"
          class="p-3 w-4/5 max-w-2xl"
        >
          <div v-if="editing === location.id" class="table w-full">
            <EditData :location="location" @close="() => (editing = '')" />
          </div>
          <div v-else>
            <DisplayData :location="location" />
            <button
              class="inline-block rounded p-2 m-2 bg-teal-800 white w-40"
              @click="() => (editing = location.id)"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
import { AllLocations } from "../data/queries.ts";
import EditData from "../components/EditData.vue";
import DisplayData from "../components/DisplayData.vue";

export default {
  components: { DisplayData, EditData },
  data: function () {
    return {
      locations: null,
      editing: null,
    };
  },
  watch: {},
  methods: {
    AllLocations() {
      return AllLocations;
    },
  },
};
</script>

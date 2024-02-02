<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { mountMap } from "../util/map";
import { LocationData } from "../util/locationDataMixin.js";

export default {
  mixins: [LocationData],
  data() {
    return {
      map: "",
      locations: null,
    };
  },
  async mounted() {
    this.locations = await this.getAllLocations();
    console.log(this.locations);

    this.map = mountMap();
  },
};
</script>

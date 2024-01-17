<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div>{{ dataString }}</div>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { mountMap } from "../util/map";
import { getAllLocations } from "../util/waypointData";

export default {
  data() {
    return {
      dataString: "",
      map: "",
    };
  },
  async mounted() {
    this.dataString = await getAllLocations();

    this.map = mountMap();
  },
};
</script>

<template>
  <div>
    <div id="map"></div>
    <div v-if="selectedPoint">{{ selectedPoint }}</div>
    <button
      v-if="selectedPoint"
      class="inline-block rounded p-2 m-2 bg-teal-800 white w-40"
      @click="addPoint"
    >
      Add Point
    </button>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { mountMap } from "../leaflet/map";
import { toRaw } from "vue";
import { LocationData } from "../data/locationDataMixin.js";

export default {
  mixins: [LocationData],
  data() {
    return {
      map: "",
      allPoints: null,
      mapPointList: [],
      selectedPoint: null,
    };
  },
  async mounted() {
    this.map = mountMap();

    this.setupMapClick();
    await this.updateLocations();
  },
  methods: {
    setupMapClick() {
      const popup = L.popup();

      const onMapClick = (e) => {
        popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString());
        this.map.openPopup(popup);
        this.selectedPoint = { ...e.latlng };
      };

      this.map.on("click", onMapClick);
    },
    async updateLocations() {
      this.allPoints = await this.getAllPoints();
      console.log(this.allPoints);

      this.mapPointList.forEach((point) => this.map.removeLayer(point));
      this.mapPointList = this.allPoints.map((point) => {
        const marker = L.marker([point.lat, point.lng]).addTo(this.map);
        marker.on("click", (e) => console.log(e, marker));
        return marker;
      });
      this.mapPointList.forEach((point) => this.map.addLayer(toRaw(point)));
      this.map.closePopup();
    },
    async addPoint() {
      console.log("Point to be added: ", this.selectedPoint);
      await this.registerPoint(this.selectedPoint.lat, this.selectedPoint.lng);
      await this.updateLocations();
    },
  },
};
</script>

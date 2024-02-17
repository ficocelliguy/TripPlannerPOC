<template>
  <div>
    <div id="map"></div>
    <div v-if="selectedLatLng">
      <div>{{ selectedLatLng }}</div>
      <button
        class="inline-block rounded p-2 m-2 bg-teal-800 white w-40"
        @click="addPoint"
      >
        Add Point
      </button>
    </div>
    <div v-if="selectedPoint">
      <div>{{ toRaw(selectedPoint._latlng) }}</div>
      <button
        class="inline-block rounded p-2 m-2 bg-teal-800 white w-40"
        @click="() => console.log('todo')"
      >
        Add Location Data
      </button>
    </div>
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
      selectedLatLng: null,
      selectedPoint: null,
    };
  },
  async mounted() {
    this.map = mountMap();

    this.setupMapClick();
    await this.updateLocations();
  },
  methods: {
    toRaw,
    setupMapClick() {
      const popup = L.popup();

      const onMapClick = (e) => {
        popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString());
        this.map.openPopup(popup);
        this.selectedLatLng = { ...e.latlng };
        this.selectedPoint = null;
      };

      this.map.on("click", onMapClick);
    },
    async updateLocations() {
      this.allPoints = await this.getAllPoints();
      console.log(this.allPoints);

      this.mapPointList.forEach((point) => this.map.removeLayer(point));
      this.mapPointList = this.allPoints.map((point) => {
        const marker = L.marker([point.lat, point.lng]).addTo(this.map);
        marker.on("click", () => this.selectPoint(marker));
        return marker;
      });
      this.mapPointList.forEach((point) => this.map.addLayer(toRaw(point)));
      this.map.closePopup();
    },
    async addPoint() {
      await this.registerPoint(
        this.selectedLatLng.lat,
        this.selectedLatLng.lng
      );
      await this.updateLocations();
    },
    selectPoint(marker) {
      this.selectedPoint = marker;
      this.selectedLatLng = null;
      this.$forceUpdate();
    },
  },
};
</script>

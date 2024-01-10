<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div>{{ dataString }}</div>
  <div id="map"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  data() {
    return {
      dataString: "",
    };
  },
  mounted() {
    const dbUri = "http://localhost:9090";

    fetch(dbUri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            allData {
              name
              id
            }
          }`,
      }),
    })
      .then(async (res) => await res.json())
      .then((res) => {
        console.log(`Fetched data: ${res.data}`);
        this.dataString = JSON.stringify(res.data);
      })
      .catch((e) => {
        console.error(`Error fetching data: ${e}`);
      });

    const map = L.map("map", {
      center: L.latLng(49.2125578, 16.62662018),
      zoom: 14,
    });

    const Thunderforest_OpenCycleMap = L.tileLayer(
      "https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}",
      {
        attribution:
          '&copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        apikey: "361a2d42eca84d66a880ba272a30e5bf",
        maxZoom: 22,
      }
    );

    Thunderforest_OpenCycleMap.addTo(map);
  },
};
</script>

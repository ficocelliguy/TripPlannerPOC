<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div>{{ dataString }}</div>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { APOLLO_URL } from "../config/config";
import { mountMap } from "../util/map";

export default {
  data() {
    return {
      dataString: "",
      map: "",
    };
  },
  mounted() {
    fetch(APOLLO_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            allPoints {
              id
              lat
              lng
            }
            allLocations {
              id
              point {
                id
                lat
                lng
              }
              name
              description
              url
              image
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

    this.map = mountMap();
  },
};
</script>

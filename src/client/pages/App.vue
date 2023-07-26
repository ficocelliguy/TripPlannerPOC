<template>
  <div
    class="bg-gradient-to-tr from-slate-900 to-slate-600 h-screen text-white"
  >
    <HeaderBar></HeaderBar>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div>{{ dataString }}</div>
  </div>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
export default {
  components: {
    HeaderBar,
  },
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
  },
};
</script>

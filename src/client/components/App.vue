<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div>{{ dataString }}</div>
</template>

<script>
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
  },
};
</script>

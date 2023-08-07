<template>
  <div
      class="bg-gradient-to-tr from-slate-900 to-slate-600 h-screen text-white"
      @click="closeNav"
  >
    <HeaderBar></HeaderBar>
    <div >
      <RouterView />
    </div>
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
    console.log(this.$route);
  }
};
</script>

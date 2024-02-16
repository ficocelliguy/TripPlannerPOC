<template>
  <div
    class="bg-gradient-to-tr from-slate-900 to-slate-600 min-h-screen text-white"
  >
    <HeaderBar></HeaderBar>
    <div>
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
};
</script>

<template>
  <div
    class="flex flex-auto flex-row bg-gradient-to-tr from-emerald-700 to-emerald-500 p-1"
  >
    <div data-test-id="navToggle" class="">
      <NavButton :on-click="toggleNavMenu" :open="navMenuOpen" />
    </div>
    <div data-test-id="title" class="w-full p-1 pl-5">Application Title</div>
  </div>
  <NavMenu :open="navMenuOpen" />
</template>

<script>
import NavButton from "./NavButton.vue";
import NavMenu from "./NavMenu.vue";

export default {
  components: { NavMenu, NavButton },
  data() {
    return {
      dataString: "",
      navMenuOpen: false,
    };
  },
  methods: {
    toggleNavMenu() {
      this.navMenuOpen = !this.navMenuOpen;
      console.log("Toggled!");
    },
    closeNavMenu() {
      this.navMenuOpen = false;
    },
  },
};
</script>

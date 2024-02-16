<template>
  <div>
    <div
      data-test-id="menu-flyout"
      class="h-screen fixed bg-emerald-900 md:w-96 w-full duration-300 z-[1500]"
      :class="{ 'left-0': open, 'md:-left-1/2 -left-full': !open }"
    >
      <h1 class="">Nav Menu</h1>
      <div>
        <RouterLink class="button" :to="{ name: 'home' }">Home</RouterLink>
      </div>
      <div>
        <RouterLink class="button" :to="{ name: 'about' }"
          >About This App</RouterLink
        >
      </div>
      <div>
        <RouterLink class="button" :to="{ name: 'locations' }"
          >Edit Location Data</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
// TODO: close drawer if current location is chosen
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

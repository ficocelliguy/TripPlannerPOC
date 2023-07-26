<template>
  <div
    data-test-id="menu-flyout"
    class="h-screen fixed bg-emerald-900 md:w-96 w-full duration-300"
    :class="{ 'left-0': open, '-left-1/2': !open }"
  >
    <div class="">Nav Menu</div>
    <div>nav item 1</div>
    <div>nav item 2</div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

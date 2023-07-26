<template>
  <div data-test-id="menu-button-container" @click="clickHandler">
    <span
      class="w-6 h-1 m-1 bg-black rounded duration-300 block origin-left"
      :class="{ 'rotate-45': open }"
    />
    <span
      class="w-6 h-1 m-1 bg-black rounded block duration-300"
      :class="{ 'opacity-0': open }"
    />
    <span
      class="w-6 h-1 m-1 bg-black rounded duration-300 block origin-left"
      :class="{ '-rotate-45': open }"
    />
  </div>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickHandler() {
      this.onClick();
    },
  },
};
</script>

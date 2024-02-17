<template>
  <div>
    <div class="flex p-0.5">
      <div class="w-1/3 p-0.5">Name:</div>
      <div class="w-2/3">
        {{ location.name }}
      </div>
    </div>
    <div class="flex p-0.5">
      <div class="w-1/3 p-0.5">Description:</div>
      <div class="w-2/3">
        {{ location.description }}
      </div>
    </div>
    <div class="flex p-0.5">
      <div class="w-1/3 p-0.5">Url:</div>
      <div class="w-2/3">
        <a :href="location.url" target="_blank">{{ location.url }}</a>
      </div>
    </div>
    <div class="flex p-0.5">
      <div class="w-1/3 p-0.5">Image:</div>
      <div class="w-2/3">
        {{ location.image }}
      </div>
    </div>
    <div class="flex p-0.5">
      <div class="w-1/3 p-0.5">Latitude:</div>
      <div class="w-2/3">
        {{ location.point.lat }}
      </div>
    </div>
    <div class="flex p-0.5">
      <div class="w-1/3 p-0.5">Longitude:</div>
      <div class="w-2/3">
        {{ location.point.lng }}
      </div>
    </div>
  </div>
</template>

<script>
import { LocationData } from "../data/locationDataMixin.js";

export default {
  mixins: [LocationData],
  props: {
    location: {
      type: Object,
      required: true,
    },
  },
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

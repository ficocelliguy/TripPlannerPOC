<template>
  <div class="flex p-0.5">
    <div class="w-1/3 p-2">Name:</div>
    <div class="w-2/3">
      <input
        v-model="newLocationData.name"
        class="bg-gray-600 rounded p-2 w-full"
        type="text"
      />
    </div>
  </div>

  <div class="flex p-0.5">
    <div class="w-1/3 p-2">Description:</div>
    <div class="w-2/3">
      <input
        v-model="newLocationData.description"
        class="bg-gray-600 rounded p-2 w-full"
        type="text"
      />
    </div>
  </div>

  <div class="flex p-0.5">
    <div class="w-1/3 p-2">Url:</div>
    <div class="w-2/3">
      <input
        v-model="newLocationData.url"
        class="bg-gray-600 rounded p-2 w-full"
        type="text"
      />
    </div>
  </div>

  <div class="flex p-0.5">
    <div class="w-1/3 p-2">Image:</div>
    <div class="w-2/3">
      <input
        v-model="newLocationData.image"
        class="bg-gray-600 rounded p-2 w-full"
        type="text"
      />
    </div>
  </div>

  <div class="flex">
    <button
      class="inline-block rounded p-2 m-2 bg-teal-800 white w-40"
      @click="close"
    >
      Cancel
    </button>
    <button
      class="inline-block rounded p-2 m-2 bg-teal-800 white w-40"
      @click="save"
    >
      Save
    </button>
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
  data: function () {
    return {
      newLocationData: {},
      editing: null,
    };
  },
  beforeMount() {
    this.newLocationData = {
      name: this.location.name,
      description: this.location.description,
      url: this.location.url,
      image: this.location.image,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      this.close();
      this.updateLocation(
        this.location.id,
        this.location.point.id,
        this.newLocationData.name,
        this.newLocationData.description,
        this.newLocationData.url,
        this.newLocationData.image
      );
    },
  },
};
</script>

<template>
  <transition
    name="custom"
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutUp"
  >
    <div v-if="sliderStatus">
      <div class="align-items-center" :class="sliderState">
        <label for="max" class="font-weight-bold -mr-2">Max:</label>
        <input
          class="form-control mx-2"
          style="width: 100px; text-align: center"
          type="number"
          v-model.number="localMax"
          @input="updateMaximum"
        />
        <input
          type="range"
          class="custom-range"
          min="0"
          max="200"
          v-model="localMax"
          @input="updateMaximum"
          style="width: 100%"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "price-slider",
  props: ["sliderStatus", "maximum"],

  data: function () {
    return {
      localMax: this.maximum,
    };
  },

  watch: {
    maximum(newVal) {
      this.localMax = newVal;
    },
  },

  methods: {
    updateMaximum() {
      this.$emit("update-maximum", this.localMax);
    },
  },

  computed: {
    sliderState: function () {
      return this.sliderStatus ? "d-flex" : "d-none";
    },
  },
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
</style>

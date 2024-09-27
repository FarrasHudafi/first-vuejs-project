<template>
  <transition-group
    name="fade"
    tag="div"
    enter-active-class="animate__animated animate__fadeInRight"
    leave-active-class="animate__animated animate__fadeOutRight"
    @before-enter="before"
    @enter="enter"
    @leave="leave"
  >
    <div
      class="row mb-3 align-items-center"
      v-for="(barang, index) in showItem"
      :data-index="index"
      :key="barang.id"
    >
      <div class="col-1 mr-auto">
        <button class="btn btn-info" @click="$emit('add', barang)">+</button>
      </div>

      <div class="col-sm-4">
        <img
          class="img-fluid"
          v-bind:src="barang.image"
          v-bind:alt="barang.name"
        />
      </div>

      <div class="col">
        <h3 class="text-info">{{ barang.name }}</h3>

        <p class="mb-0">{{ barang.description }}</p>
        <div class="h5 float-right">
          <price v-bind:value="Number(barang.price)"></price>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import Price from "./ProductPrice.vue";
export default {
  name: "ProductList",
  components: {
    Price,
  },
  props: ["products", "maximum"],
  computed: {
    showItem: function () {
      let max = this.maximum;
      return this.products.filter(function (barang) {
        return barang.price <= max;
      });
    },
  },
  methods: {
    before: function (el) {
      el.classList.add("d-none");
    },

    enter: function (el) {
      let delay = el.dataset.index * 100;
      setTimeout(function () {
        el.classList.remove("d-none");
        el.classList.add("d-flex", "animated", "fadeInRight");
      }, delay);
    },
    leave: function (el) {
      let delay = el.dataset.index * 100;
      setTimeout(function () {
        el.classList.remove("animated", "fadeInRight");
      }, delay);
    },
  },
};
</script>

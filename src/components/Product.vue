<template>
  <div>
    <h1 class="mb-4">MyShop</h1>
    <AppNavbar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle-slide="toggleSlider"
      @remove-item="deleteItem"
    />
    <price-slider
      :sliderStatus="sliderStatus"
      :maximum="maximum"
      @update-maximum="$emit('update-maximum', $event)"
    />
    <ProductList :products="products" :maximum="maximum" @add="addItem" />
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import PriceSlider from "./PriceSlider.vue";
import AppNavbar from "./Navbar.vue";

export default {
  name: "ProductListComponent",
  props: [
    "products",
    "cart",
    "cartQty",
    "cartTotal",
    "maximum",
    "sliderStatus",
    "toggleSliderStatus",
    "updateMaximum",
  ],
  components: {
    AppNavbar,
    PriceSlider,
    ProductList,
  },

  methods: {
    toggleSlider: function () {
      this.$emit("toggle");
    },
    addItem: function (item) {
      this.$emit("add", item);
    },
    deleteItem: function (index) {
      this.$emit("remove-item", index);
    },
  },
};
</script>

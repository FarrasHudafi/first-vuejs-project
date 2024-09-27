<template>
  <nav class="navbar navbar-light fixed-top">
    <div class="navbar-text ml-auto d-flex">
      <button
        class="btn btn-sm btn-outline-success"
        @click="$emit('toggle-slide')"
      >
        <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
      </button>
      <div class="ml-2 dropdown" v-if="cart.length > 0">
        <button
          class="btn btn-success btn-sm dropdown-toggle"
          id="dropdownCart"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <span class="badge badge-pill badge-success">{{ cartQty }}</span>
          <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
          <product-price :value="Number(cartTotal)"></product-price>
        </button>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownCart"
        >
          <div v-for="(barang, index) in cart" :key="index">
            <div class="dropdown-item-text text-nowrap text-right">
              <span class="badge badge-warning align-text-top mr-1">
                {{ barang.qty }}
              </span>
              {{ barang.product.name }}
              <b>{{ formatCurrency(barang.product.price * barang.qty) }}</b>
              <a
                href="#"
                class="badge badge-danger text-white"
                @click.stop="deleteItem(index)"
                >-</a
              >
            </div>
          </div>
          <router-link
            class="btn btn-sm btn-outline-info text-dark float-right mr-2"
            to="/checkout"
            >Checkout</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ProductPrice from "./ProductPrice.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "AppNavbar",
  components: {
    ProductPrice,
    FontAwesomeIcon,
  },

  props: ["cart", "cartQty", "cartTotal"],
  methods: {
    formatCurrency(value) {
      return "Rp" + Number.parseFloat(value).toFixed(2);
    },
    deleteItem(index) {
      this.$emit("remove-item", index);
    },
  },
};
</script>

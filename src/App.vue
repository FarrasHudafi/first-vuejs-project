<template>
  <div id="app" class="container mt-5">
    <router-view
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      v-model:maximum.sync="maximum"
      :products="products"
      :sliderStatus="sliderStatus"
      @toggle="toggleSliderStatus"
      @remove-item="deleteItem"
      @update-maximum="updateMaximum"
      @add="addItem"
    ></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      maximum: 50,
      products: [],
      cart: [],
      sliderStatus: false,
    };
  },

  mounted() {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },

  computed: {
    cartTotal() {
      return this.cart.reduce(
        (sum, item) => sum + item.product.price * item.qty,
        0
      );
    },
    cartQty() {
      return this.cart.reduce((qty, item) => qty + item.qty, 0);
    },
  },

  methods: {
    toggleSliderStatus() {
      this.sliderStatus = !this.sliderStatus;
    },
    updateMaximum(newMax) {
      this.maximum = newMax; // Memperbarui maximum di sini
    },
    addItem(barang) {
      const productIndex = this.cart.findIndex(
        (item) => item.product.id === barang.id
      );
      if (productIndex >= 0) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({
          product: barang,
          qty: 1,
        });
      }
    },
    deleteItem: function (index) {
      if (this.cart[index].qty > 1) {
        this.cart[index].qty--;
      } else {
        this.cart.splice(index, 1);
      }
    },
  },
};
</script>

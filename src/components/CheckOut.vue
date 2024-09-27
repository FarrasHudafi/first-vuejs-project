<template>
  <div>
    <h1>CheckOut</h1>
    <table class="table table-hover" v-if="cart.length">
      <caption class="text-right h3">
        <b>Total:</b>
        <span class="d-block text-success font-weight-light">
          {{ formatCurrency(cartTotal) }}
        </span>
      </caption>
      <thead>
        <tr scope="col">
          <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-right">Price</th>
          <th scope="col" class="text-right">Sub-total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(barang, index) in cart" :key="barang.product.directives">
          <td class="text-center">
            <div class="btn-group">
              <button
                @click="$emit('add', barang.product)"
                class="btn btn-info"
              >
                +
              </button>
              <button
                @click="$emit('remove-item', index)"
                class="btn btn-outline-info"
              >
                -
              </button>
            </div>
          </td>
          <th scope="row">{{ barang.product.name }}</th>
          <th class="text-center">{{ barang.qty }}</th>
          <th class="text-right">{{ formatCurrency(barang.product.price) }}</th>
          <th class="text-right">
            {{ formatCurrency(barang.product.price * barang.qty) }}
          </th>
        </tr>
      </tbody>
    </table>
    <router-link class="btn btn-sm btn-outline-info text-dark" to="/"
      >Back to shop</router-link
    >
  </div>
</template>

<script>
export default {
  name: "CheckOut",
  props: ["cart", "cartTotal"],
  methods: {
    formatCurrency(value) {
      return "Rp" + Number.parseFloat(value).toFixed(2);
    },
  },
};
</script>

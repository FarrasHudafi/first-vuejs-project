import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router"; // Pastikan untuk mengimpor ini
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan ini ada
import "bootstrap"; // Pastikan ini ada
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; // Pastikan mengimpor FontAwesomeIcon

import ProductListComponent from "./components/Product.vue";
import CheckOut from "./components/CheckOut.vue";

// Tambahkan ikon FontAwesome ke library
library.add(faShoppingCart, faDollarSign);

// Definisikan rute
const routes = [
  {
    path: "/",
    component: ProductListComponent, // Komponen utama untuk halaman produk
  },
  {
    path: "/checkout",
    component: CheckOut, // Komponen checkout
  },
  {
    path: "/:catchAll(.*)", // Menggunakan wildcard route untuk menangkap rute yang tidak dikenali
    component: ProductListComponent, // Kembali ke halaman Product jika rute tidak dikenali
  },
];

// Buat instance router
const router = createRouter({
  history: createWebHistory(), // Menggunakan HTML5 History Mode
  routes,
});

// Buat aplikasi dan gunakan router
const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon); // Daftarkan komponen FontAwesome

// Mount aplikasi
app.mount("#app");

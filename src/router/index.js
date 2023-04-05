import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../data/pages/MainPage";
import NotFoundPage from "../data/pages/NotFoundPage";
import ProductPage from "../data/pages/ProductPage";
import CartPage from "../data/pages/CartPage";
import OrderPage from "../data/pages/OrderPage";
import OrderInfoPage from "../data/pages/OrderInfoPage";

Vue.use(VueRouter);

const routes = [
  {name: 'main', component: MainPage, path: '/'},
  {name: 'product', component: ProductPage, path: '/product/:id'},
  {name: 'notFound', component: NotFoundPage, path: '*'},
  {name: 'cart', component: CartPage, path: '/cart'},
  {name: 'order', component:   OrderPage, path: '/order'},
  {name: 'orderInfo', component:   OrderInfoPage, path: '/order/:id'},
];

const router = new VueRouter({
  routes
});

export default router;


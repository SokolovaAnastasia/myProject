<template>
  <li class="cart__item product" v-if="productLoading">
    <img
      src="@/../public/img/Spinner-3.gif"
      style="margin-right: auto; margin-left: auto; display: block"
    />
  </li>
  <li class="cart__item product" v-else-if="!this.item">Не удолось загрузить товар</li>
  <li class="cart__item product" v-else>
    <div class="product__pic">
      <img :src="item.product.image" width="120" height="120" alt="item.product.title" />
    </div>
    <h3 class="product__title">
      {{ item.product.title }}
    </h3>
    <span class="product__code"> </span>

    <div class="product__counter form__counter">
      <button type="button" aria-label="Убрать один товар" @click="delit">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>

      <input type="text" v-model.namber="amount" name="count" :class="'id' + item.product.id" />

      <button type="button" aria-label="Добавить один товар" @click="add">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-plus"></use>
        </svg>
      </button>
    </div>

    <b class="product__price">
      {{ (item.amount * item.product.price) | numberFormat }}
    </b>

    <button
      class="product__del button-del"
      type="button"
      aria-label="Удалить товар из корзины"
      @click.prevent="deleteProduct(item.productId)"
    >
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>
<script>
import numberFormat from "@/helpers/numberFormat";
import { mapMutations } from "vuex";

export default {
  data() {
    console.log();
    return {
      productLoading: false,
      productLoadingFailed: false,
    };
  },
  filters: { numberFormat },
  props: ["item"],
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        // здесь меняется сумма
        console.log('aaa')
        this.$store.dispatch("updateCartProductAmount", {
          productId: this.item.productId,
          amount: value,
        });
      },
    },
  },
  methods: {
    delit() {
      let classNamber = "id" + this.item.product.id;
      let namber = document.getElementsByClassName(classNamber)[0];
      namber.value === +namber.value--;
      this.productAmount === +this.productAmount--;
      this.item.amount === this.item.amount--;


      this.$store.dispatch("updateCartProductAmount", {
          productId: this.item.productId,
          amount: this.item.amount,
        });
    },
    add() {
      let classNamber = "id" + this.item.product.id;
      let namber = document.getElementsByClassName(classNamber)[0];
      namber.value === +namber.value++;
      this.productAmount === +this.productAmount++;
      this.item.amount === this.item.amount++;

      this.$store.dispatch("updateCartProductAmount", {
          productId: this.item.productId,
          amount: this.item.amount,
        });
    },
    ...mapMutations({ deleteProduct: "deleteCartProduct" }),
    loadProduct() {
      this.productLoading = true;
      this.productLoadingFailed = false;

      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(() => {
        this.productLoadingFailed = true;
        this.productLoading = false;
      }, 1000);
    },
  },

  watch: {
    "$route.params.id": {
      handler() {
        this.loadProduct();
      },
      immediate: true,
    },
  },

 
};
</script>

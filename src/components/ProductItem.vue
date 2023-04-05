

 <template>
  
  <div style="display:flex;">
    <li class="catalog__item">
    
      <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}" >
        <img :src="product.image" :alt="product.title">
      </router-link>

      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>

      <span class="catalog__price">
        {{ product.price | numberFormat }} p
      </span>

      <ul class="colors colors--black">
        <li class="colors__item" v-for="item in product.colors" :key="item.message">
          <label class="colors__label">
            <input class="colors__radio sr-only" type="radio" :value="item.code" v-model="color">
            <span class="colors__value"  :style="{backgroundColor: item.code}">
            </span>
          </label>
        </li>
        
      </ul>
    </li>
  </div>
</template>

<script>
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  data() {
    return {
      color: '#73B6EA'
    };
  },
  filters: {
numberFormat
  },
  methods: {
    gotoPage
  },
  props: ['product']
}
</script>
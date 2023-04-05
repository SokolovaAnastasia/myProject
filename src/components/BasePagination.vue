
<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow"  :class="{'pagination__link--disabled': page < 2}" href="#" @click.prevent="prevPage(page)" aria-label="Предыдущая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNamber in pages" :key="pageNamber">
      <a href="#" class="pagination__link" :class="{'pagination__link--current': pageNamber === page}" @click.prevent="paginate(pageNamber)">
        {{ pageNamber }}
      </a>
    </li>
    <li class="pagination__item" >
      <a class="pagination__link pagination__link--arrow" :class="{'pagination__link--disabled': page > 3}" href="#" @click.prevent="nextPage(page)"  aria-label="Следующая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    }
  },
  methods: {
    paginate(page){
      this.$emit('paginate', page);
    },
    nextPage(page = this.page) {
      this.$emit('paginate', page + 1);
    },
    prevPage(page = this.page) {
      this.$emit('paginate', page - 1);
    },
  }
}

</script>

<template>
  <section class="newest-articles">
    <h2>Новые статьи</h2>
    <app-articles
      v-if="newestArticles.length > 0"
      :articles="items"
    />
    <app-empty-article v-else />
    <paginate
      v-if="newestArticles.length > pageSize"
      v-model="page"
      :page-count="pageCount"
      :page-range="pageRange"
      :click-handler="pageChangeHandler"
      :prev-text="'Назад'"
      :next-text="'Вперед'"
      :container-class="'paginate'">
    </paginate>
  </section>
</template>

<script>

import AppArticles from '@/components/Articles.vue';
import AppEmptyArticle from '@/components/EmptyArticle.vue';
import { mapGetters } from 'vuex';
import paginationMixin from '@/mixins/pagination.mixin';

export default {
  name: 'newest-articles',
  mixins: [paginationMixin],
  components: {
    AppArticles,
    AppEmptyArticle
  },
  mounted(){
    this.setupPagination(this.newestArticles);
  },
  computed: {
    ...mapGetters([
      'newestArticles'
    ])
  },
  watch: {
    newestArticles(loaded) {
      this.setupPagination(loaded);
    }
  }
};
</script>

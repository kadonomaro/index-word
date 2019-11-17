<template>
  <div class="popular-articles">
    <h2>Популярные статьи</h2>
    <app-articles
      v-if="popularArticles.length > 0"
      :articles="items"
    />
    <app-empty-article v-else />
    <paginate
      v-if="popularArticles.length > pageSize"
      v-model="page"
      :page-count="pageCount"
      :click-handler="pageChangeHandler"
      :prev-text="'Назад'"
      :next-text="'Вперед'"
      :container-class="'paginate'">
    </paginate>
  </div>
</template>

<script>

import AppArticles from '@/components/Articles.vue';
import AppEmptyArticle from '@/components/EmptyArticle.vue';
import { mapGetters } from 'vuex';
import paginationMixin from '@/mixins/pagination.mixin';

export default {
  name: 'popular-articles',
  mixins: [paginationMixin],
  components: {
    AppArticles,
    AppEmptyArticle
  },
  mounted(){
    setTimeout(() => {
    this.setupPagination(this.popularArticles)
    }, 1000);
  },
  computed: {
    ...mapGetters([
      'popularArticles'
    ])
  }
};
</script>

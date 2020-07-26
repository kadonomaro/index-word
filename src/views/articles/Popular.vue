<template>
  <section class="popular-articles">
    <h2>Популярные статьи</h2>
    <article-list
      v-if="popularArticles.length > 0"
      :articles="items"
    />
    <app-empty-article v-else />
    <paginate
      v-if="popularArticles.length > pageSize"
      v-model="page"
      :page-count="pageCount"
      :page-range="pageRange"
      :click-handler="pageChangeHandler"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'paginate'">
    </paginate>
  </section>
</template>

<script>

import ArticleList from '@/components/Article/ArticleList.vue';
import AppEmptyArticle from '@/components/Article/EmptyArticle.vue';
import { mapGetters } from 'vuex';
import paginationMixin from '@/mixins/pagination.mixin';

export default {
  name: 'popular-articles',
  mixins: [paginationMixin],
  components: {
    ArticleList,
    AppEmptyArticle
  },
  mounted(){
    this.setupPagination(this.popularArticles);
  },
  computed: {
    ...mapGetters([
      'popularArticles'
    ])
  },
  watch: {
    popularArticles(loaded) {
      this.setupPagination(loaded);
    }
  }
};
</script>

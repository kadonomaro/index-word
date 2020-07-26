<template>
  <section class="newest-articles">
    <h2>Новые статьи</h2>
    <article-list
      v-if="newestArticles.length > 0"
      :articles="items"
    />
    <empty-article v-else />
    <paginate
      v-if="newestArticles.length > pageSize"
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
import EmptyArticle from '@/components/Article/EmptyArticle.vue';
import { mapGetters } from 'vuex';
import paginationMixin from '@/mixins/pagination.mixin';

export default {
  name: 'newest-articles',
  mixins: [paginationMixin],
  components: {
    ArticleList,
    EmptyArticle
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

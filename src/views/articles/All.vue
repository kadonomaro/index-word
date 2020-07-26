<template>
  <section class="all-articles">
    <h2>Все статьи</h2>
    <article-list :articles="items" />
    <paginate
      v-if="activeArticles.length > pageSize"
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
import ArticleList from '@/components/Article/ArticleList.vue';
import { mapGetters } from 'vuex';
import paginationMixin from '@/mixins/pagination.mixin';

export default {
  name: 'all-articles',
  mixins: [paginationMixin],
  components: {
    ArticleList,
  },
  mounted() {
    this.setupPagination(this.activeArticles);
  },
  computed: {
    ...mapGetters([
      'activeArticles'
    ])
  },
  watch: {
    activeArticles(loaded) {
      this.setupPagination(loaded);
    }
  }
};
</script>

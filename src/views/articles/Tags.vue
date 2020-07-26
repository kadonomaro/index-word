<template>
  <section class="all-articles">
    <h2>#{{ title }}</h2>
    <article-list :articles="items" />
    <paginate
      v-if="articles.length > pageSize"
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
  name: 'articles-tags',
  mixins: [paginationMixin],
  components: {
    ArticleList,
  },
  mounted() {
    this.setupPagination(this.articles);
  },
  computed: {
    ...mapGetters([
      'getArticlesByTag'
		]),
		articles() {
			return this.getArticlesByTag(this.$route.query.tag || 'фильмы');
		},
		title() {
			return this.$route.query.tag;
		}
  },
  watch: {
    articles(loaded) {
      this.setupPagination(loaded);
    }
  }
};
</script>

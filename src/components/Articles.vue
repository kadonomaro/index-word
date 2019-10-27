<template>
  <div class="articles">
    <div class="articles__list">
      <app-article
        class="articles__item"
        v-for="article in articles"
        :key="article.id"
        :id="article.id"
        :title="article.title"
        :date="article.date"
        :popularity="article.popularity"
      >
        <div v-html="article.text" ></div>
      </app-article>
    </div>

  </div>
</template>

<script>
import AppArticle from '@/components/Article.vue';

export default {
  name: 'Articles',
  components: {
    AppArticle,
  },
  data() {
    return {
      articles: this.$store.state.articles,
    };
  },
  created() {
    this.getData();
  },
  mounted() {

  },
  methods: {
    getData() {
      this.$store.dispatch('getArticles');
    },
  },
};
</script>

<style lang="scss">
  .articles {
    padding: 20px 0;
    overflow: hidden;
    &__list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }
    &__item {
      flex-basis: calc(33.333% - 20px);
      max-width: calc(33.333% - 20px);
      min-width: 250px;
      margin: 10px;
    }
  }
</style>

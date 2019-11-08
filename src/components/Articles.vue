<template>
  <div class="container">
    <div class="articles">
      <div class="articles__list">
        <app-article
          class="articles__item"
          v-for="article in articles"
          :key="article.id"
          :id="article.id"
          :title="article.title"
          :date="article.date"
          :image="article.image"
          :popularity="article.popularity"
          :text="article.text"
        >
        </app-article>
      </div>
    </div>
  </div>
</template>

<script>
import AppArticle from '@/components/Article.vue';

export default {
  name: 'Articles',
  props: ['propArticles'],
  components: {
    AppArticle,
  },
  data() {
    return {
      articles: this.propArticles || this.$store.getters.allArticles,
    };
  },
  created() {
    this.getData();;
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
    padding: 0 10px;
    overflow: hidden;
    &__list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }
    &__item {
      flex-basis: calc(33.333% - 30px);
      max-width: calc(33.333% - 30px);
      min-width: 250px;
      margin: 15px;
    }
  }
</style>

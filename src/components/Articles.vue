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
      >
        <div v-html="article.text" ></div>
      </app-article>
    </div>

  </div>
</template>

<script>
// import db from '@/main';

export default {
  name: 'Articles',
  data() {
    return {
      articles: this.$store.state.articles,
    };
  },
  created() {

  },
  mounted() {
    this.getData();
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

    &__list {
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      flex-basis: calc(33.333% - 20px);
      max-width: calc(33.333% - 20px);
      min-width: 250px;
      margin: 10px;
    }
  }
</style>

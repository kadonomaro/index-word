<template>
  <div class="articles">
    <div class="articles__list">
      <app-article
        class="articles__item"
        v-for="article in articles"
        :key="article.id"
        :id="article.id"
        :title="article.title"
        :text="article.text"
        :date="article.date"
      />
    </div>

  </div>
</template>

<script>
import db from '@/main';

export default {
  name: 'Articles',
  props: {
    msg: String,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {

  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      db.collection('articles')
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const article = {
              id: doc.id,
              title: doc.data().title,
              text: doc.data().text,
              date: new Date(doc.data().date.seconds * 1000).toLocaleString(),
            };
            this.articles.push(article);
          });
        });
    },
  },
};
</script>

<style scoped lang="scss">
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

<template>
  <div class="editable-articles">
    <div class="editable-articles__list">
      <div v-for="article in allArticles" :key="article.id" class="editable-articles__item">

        <article class="article">
          <div class="article__image">
            <img class="article__image-img" :src="article.image" alt="">
          </div>
          <div class="article__text">
            <h2 class="article__title">{{ article.title }}</h2>
            <div v-html="article.text"></div>
          </div>
          <footer class="article__footer">
            <time datetime="" class="article__date">{{ article.date.toLocaleString() }}</time>
          </footer>
        </article>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'EditableArticles',
  created() {
    this.getData();
  },
  computed: {
    ...mapGetters([
      'allArticles'
    ])
  },
  methods: {
    getData() {
      this.$store.dispatch('getArticles');
    },
  },
}
</script>

<style lang="scss">
  .editable-articles {
    &__list {
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      flex-basis: 25%;
    }
    display: flex;
    flex-wrap: wrap;
  }
</style>

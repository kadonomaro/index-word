<template>
  <div class="articles">
    <div class="articles__list">
      <app-article
        class="articles__item"
        v-for="article in articles"
        :key="article.id"
        :id="article.id"
        :url="article.url"
        :title="article.title"
        :date="article.date"
        :image="article.image"
        :popularity="article.popularity"
        :text="article.text"
        :comments="article.comments"
        :isActive="article.isActive"
      >
      </app-article>
    </div>
  </div>
</template>

<script>
import AppArticle from '@/components/Article.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Articles',
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    AppArticle,
  },
  computed: {
    ...mapGetters([
      'allArticles',
      'popularArticles'
    ])
  }
};
</script>

<style lang="scss">
  .articles {
    text-align: center;
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

  @media screen and (max-width: 1279px) {
    .articles {
      &__item {
        flex-basis: calc(50% - 20px);
        max-width: calc(50% - 20px);
        margin: 10px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .articles {
      &__list {
        display: block;
      }
      &__item {
        max-width: calc(100% - 20px);
        margin: 10px;
      }
    }
  }
</style>

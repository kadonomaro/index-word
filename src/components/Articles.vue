<template>
  <div class="articles">
    <div class="articles__list">
			<div class="articles__item" v-for="article in articles" :key="article.id">
				<app-article :article="article" />
			</div>
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
      flex-basis: 25%;
      max-width: 25%;
      min-width: 250px;
			padding: 10px;
			box-sizing: border-box;
    }
  }

  @media screen and (max-width: 1279px) {
    .articles {
      &__item {
        flex-basis: 50%;
        max-width: 50%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .articles {
      &__list {
        display: block;
      }
      &__item {
        max-width: 100%;
      }
    }
  }
</style>

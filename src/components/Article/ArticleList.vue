<template>
  <div class="articles">
    <div class="articles__list">
			<div class="articles__item" v-for="article in articles" :key="article.id">
				<article-item :article="article" />
			</div>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/Article/ArticleItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ArticleList',
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    ArticleItem,
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

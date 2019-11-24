<template>
  <div class="editable-articles">
    <div class="editable-articles__list">
      <div v-for="article in allArticles" :key="article.id" class="editable-articles__item">
        <article-item :article="article" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ArticleItem from '@/components/admin/ArticleItem.vue';

export default {
  name: 'ArticleEdit',
  components: {
    ArticleItem,
  },
  computed: {
    ...mapGetters([
      'allArticles'
    ])
  }

}
</script>

<style lang="scss">
  .editable-articles {
    &__list {
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      flex-basis: calc(33.3333% - 20px);
      margin: 10px;
    }
  }
</style>

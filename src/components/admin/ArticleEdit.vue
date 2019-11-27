<template>
  <div class="editable-articles">
    <div class="editable-articles__list">
      <article-item
        class="editable-articles__item"
        v-for="article in allArticles"
        :key="article.id"
        :article="article"
      />
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

    }
    &__item {
      margin-bottom: 20px;
    }
  }
</style>

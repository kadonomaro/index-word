<template>
  <div class="editable-articles">
    <app-button
      class="editable-articles__button"
      @click-handler="$router.push({ name: 'new-article' })"
      :text="'New'" />
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
import AppButton from '@/components/blocks/AppButton.vue';

export default {
  name: 'ArticleEdit',
  components: {
    ArticleItem,
    AppButton
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
    &__button {
      margin-bottom: 20px;
    }
    &__item {
      margin-bottom: 20px;
    }
  }
</style>

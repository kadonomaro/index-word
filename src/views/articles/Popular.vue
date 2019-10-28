<template>
  <div class="popular-articles">
    <h2>Популярные статьи</h2>
    <app-articles
      v-if="popularArticles.length > 0"
      :popularArticles="popularArticles"
    />
    <app-empty-article
      v-else
    />
  </div>
</template>

<script>

import AppArticles from '@/components/Articles.vue';
import AppEmptyArticle from '@/components/EmptyArticle.vue';

export default {
  name: 'popular-articles',
  components: {
    AppArticles,
    AppEmptyArticle
  },
  data() {
    return {
      popularArticles: this.$store.getters.popularArticles
    }
  }
};
</script>

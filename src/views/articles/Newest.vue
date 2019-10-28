<template>
  <div class="newest-articles">
    <h2>Новые статьи</h2>
    <app-articles
      v-if="newestArticles.length > 0"
      :propArticles="newestArticles"
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
  name: 'newest-articles',
  components: {
    AppArticles,
    AppEmptyArticle
  },
  data() {
    return {
      newestArticles: this.$store.getters.newestArticles
    }
  }
};
</script>

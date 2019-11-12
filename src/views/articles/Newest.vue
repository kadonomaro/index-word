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
import { mapGetters } from 'vuex';
export default {
  name: 'newest-articles',
  components: {
    AppArticles,
    AppEmptyArticle
  },
  computed: {
    ...mapGetters([
      'newestArticles'
    ])
  }
};
</script>

<template>
  <div class="popular-articles">
    <h2>Популярные статьи</h2>
    <app-articles
      v-if="popularArticles.length > 0"
      :articles="popularArticles"
    />
    <app-empty-article v-else />
  </div>
</template>

<script>

import AppArticles from '@/components/Articles.vue';
import AppEmptyArticle from '@/components/EmptyArticle.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'popular-articles',
  components: {
    AppArticles,
    AppEmptyArticle
  },
  computed: {
    ...mapGetters([
      'popularArticles'
    ])
  }
};
</script>

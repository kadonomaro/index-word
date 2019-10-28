<template>
  <div class="popular-articles">
    <h2>Популярные статьи</h2>
    <app-articles
      v-if="popularArticles"
      :popularArticles="popularArticles"
    />
    <h3 v-else>Здесь пока ничего нет</h3>
  </div>
</template>

<script>

import AppArticles from '@/components/Articles.vue';

export default {
  name: 'popular-articles',
  components: {
    AppArticles,
  },
  data() {
    return {
      popularArticles: this.$store.getters.popularArticles
    }
  }
};
</script>

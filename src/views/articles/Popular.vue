<template>
  <div class="popular-articles">
    <h2>Популярные статьи</h2>
    <app-articles />
  </div>
</template>

<script>

import AppArticles from '@/components/Articles.vue';

export default {
  name: 'popular-articles',
  components: {
    AppArticles,
  },
};
</script>

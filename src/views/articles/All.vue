<template>
  <div class="all-articles">
    <h2>Все статьи</h2>
    <app-articles/>
  </div>
</template>

<script>

import AppArticles from '@/components/Articles.vue';

export default {
  name: 'all-articles',
  components: {
    AppArticles,
  },
};
</script>

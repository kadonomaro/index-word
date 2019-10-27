<template>
  <div class="newest-articles">
    <h2>Новые статьи</h2>
    <app-articles/>
  </div>
</template>

<script>

import AppArticles from '@/components/Articles.vue';

export default {
  name: 'newest-articles',
  components: {
    AppArticles,
  },
};
</script>

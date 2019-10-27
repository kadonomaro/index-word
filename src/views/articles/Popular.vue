<template>
  <div class="popular-articles">
    <app-articles/>
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

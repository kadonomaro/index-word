<template>
  <div class="newest-articles">
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

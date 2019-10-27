<template>
  <div class="all-articles">
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

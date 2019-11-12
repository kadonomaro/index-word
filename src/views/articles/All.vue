<template>
  <div class="all-articles">
    <h2>Все статьи</h2>
    <app-articles :articles="allArticles" />
  </div>
</template>

<script>

import AppArticles from '@/components/Articles.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'all-articles',
  components: {
    AppArticles,
  },
  computed: {
    ...mapGetters([
      'allArticles'
    ])
  }
};
</script>

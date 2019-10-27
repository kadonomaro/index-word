<template>
  <div class="home">
    <app-tabs />
    <!-- <app-articles/> -->
    <router-view />
  </div>
</template>

<script>

import AppTabs from '@/components/Tabs.vue';
import AppArticles from '@/components/Articles.vue';

export default {
  name: 'home',
  components: {
    AppTabs,
    AppArticles
  },
};
</script>

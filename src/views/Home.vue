<template>
  <div class="home">
    <app-tabs />
    <!-- <app-articles/> -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
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

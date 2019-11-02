<template>
  <div class="home">
    <app-hero />
    <app-tabs />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

import AppTabs from '@/components/Tabs.vue';
import AppArticles from '@/components/Articles.vue';
import AppHero from '@/components/Hero.vue';

export default {
  name: 'home',
  components: {
    AppTabs,
    AppArticles,
    AppHero
  },
};
</script>

<template>
  <main class="main-layout">
    <app-hero />
    <app-tabs />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<script>

import AppTabs from '@/components/Tabs.vue';
import AppHero from '@/components/Hero.vue';

export default {
  name: 'MainLayout',
  components: {
    AppHero,
    AppTabs
  }
}
</script>

<style>

</style>

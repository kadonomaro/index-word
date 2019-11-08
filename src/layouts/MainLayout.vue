<template>
  <main class="main-layout">
    <app-hero />
    <app-tabs />
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
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

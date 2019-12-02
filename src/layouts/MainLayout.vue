<template>
  <main class="main-layout">
    <app-hero />
    <app-tabs />
    <smart-search :list="articlesTitle"/>
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import AppTabs from '@/components/Tabs.vue';
import AppHero from '@/components/Hero.vue';
import SmartSearch from '@/components/SmartSearch.vue';

export default {
  name: 'MainLayout',
  components: {
    AppHero,
    AppTabs,
    SmartSearch
  },
  computed: {
    ...mapGetters([
      'articlesTitle'
    ])
  }
}
</script>

<style>

</style>

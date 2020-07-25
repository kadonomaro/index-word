<template>
  <main class="main-layout">
    <div class="main-layout__inner">
      <app-hero />
      <app-tabs />
      <smart-search :list="articlesTitle"/>
      <div class="container">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
    <app-footer />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import AppTabs from '@/components/partials/Tabs.vue';
import AppHero from '@/components/partials/Hero.vue';
import SmartSearch from '@/components/partials/SmartSearch.vue';
import AppFooter from '@/components/partials/Footer.vue';

export default {
  name: 'MainLayout',
  components: {
    AppHero,
    AppTabs,
    SmartSearch,
    AppFooter
  },
  computed: {
    ...mapGetters([
      'articlesTitle'
    ])
  }
}
</script>

<style lang="scss">
  .main-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    &__inner {
      flex-grow: 1;
      padding-bottom: 30px;
    }
  }
</style>

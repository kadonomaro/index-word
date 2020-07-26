<template>
  <div class="main-layout">
    <div class="main-layout__inner">
      <app-hero />
      <app-navigation />
      <div class="container">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppNavigation from '@/components/partials/Navigation.vue';
import AppHero from '@/components/partials/Hero.vue';
import AppFooter from '@/components/partials/Footer.vue';

export default {
  name: 'MainLayout',
  components: {
    AppHero,
    AppNavigation,
    AppFooter
  }
}
</script>

<style lang="scss">
  .main-layout {
    display: flex;
    flex-direction: column;
		min-height: 100vh;
		color: #ffffff;
    &__inner {
      flex-grow: 1;
      padding-bottom: 30px;
    }
  }
</style>

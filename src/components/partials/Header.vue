<template>
  <header class="header">
    <div class="header__inner">
      <app-logo class="header__logo" />
      <app-nav class="header__nav" />
    </div>
  </header>
</template>

<script>
import AppLogo from '@/components/partials/Logo.vue';
import AppNav from '@/components/partials/Nav.vue';
export default {
  name: 'Header',
  components: {
    AppLogo,
    AppNav
  }
}
</script>

<style lang="scss">
  .header {
    padding: 10px;
    &__inner {
      display: flex;
      align-items: center;
    }
    &__logo {
      margin-right: auto;
    }
  }
</style>

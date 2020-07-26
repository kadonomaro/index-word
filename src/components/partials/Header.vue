<template>
  <header class="header">
    <div class="header__inner">
      <app-logo class="header__logo" />
    </div>
  </header>
</template>

<script>
import AppLogo from '@/components/partials/Logo.vue';
export default {
  name: 'Header',
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
  .header {
		padding: 10px;
		background-color: $color-dark-gray;
    &__inner {
      display: flex;
      align-items: center;
    }
    &__logo {
      margin-right: auto;
    }
  }
</style>

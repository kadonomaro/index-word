<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__col">
        <app-logo :text="false" />
      </div>
      <div class="footer__col">
        <span class="footer__title">title</span>
      </div>
      <div class="footer__col">
        <span class="footer__title">title</span>
      </div>
    </div>

  </footer>
</template>

<script>
import AppLogo from '@/components/Logo.vue';

export default {
  name: 'Footer',
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
  .footer {
    padding: 20px 10px;
    color: #dbdbdb;
    background-color: #3c4c67;
    &__inner {
      display: flex;
      max-width: 1600px;
      margin: 0 auto;
    }
    &__col {
      flex-basis: 33.3333%;
      max-width: 33.3333%;
      text-align: center;
    }
    &__title {
      display: block;
      color: #ffffff;
      font-size: 18px;
      text-transform: uppercase;
    }
  }
</style>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__col">
        <app-logo :text="false" />
      </div>
      <div class="footer__col">
        <span class="footer__title">статьи</span>
        <router-link class="footer__link" to="/popular">Популярные</router-link>
        <router-link class="footer__link" to="/newest">Новинки</router-link>
      </div>
      <div class="footer__col">
        <span class="footer__title">мы в социальных сетях</span>
        <a class="footer__link" href="https://github.com/kadonomaro" target="_blank">Github</a>
      </div>
    </div>
    <span class="footer__copy">Designed by Kadonomaro Ⓒ {{ new Date().getFullYear() }}</span>
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
    padding: 20px 0 10px;
    color: #dbdbdb;
    background-color: #3c4c67;
    &__inner {
      display: flex;
      max-width: 1600px;
      margin: 0 auto 10px;
      padding: 0 10px 10px;
      border-bottom: 1px solid #dbdbdb;
    }
    &__col {
      flex-basis: 33.3333%;
      max-width: 33.3333%;
      text-align: center;
    }
    &__title {
      display: inline-block;
      margin-bottom: 10px;
      color: #ffffff;
      font-size: 18px;
      text-transform: uppercase;
      border-bottom: 1px solid currentColor;
    }
    &__link {
      display: block;
      margin-bottom: 5px;
      color: inherit;
      text-decoration: none;
      transition: color 0.2s ease-in;
      &:hover,
      &:focus {
        color: #ffffff;
      }
    }
    &__copy {
      display: block;
      text-align: center;
    }
  }
</style>

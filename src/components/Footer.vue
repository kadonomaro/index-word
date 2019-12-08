<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__col">
        <app-logo class="footer__logo" />
      </div>
      <div class="footer__col">
        <span class="footer__title">статьи</span>
        <ul class="footer__list">
          <li class="footer__item">
            <router-link class="footer__link" to="/popular">Популярные</router-link>
            </li>
          <li class="footer__item">
            <router-link class="footer__link" to="/newest">Новинки</router-link>
            </li>
        </ul>
      </div>
      <div class="footer__col">
        <span class="footer__title">мы в социальных сетях</span>
        <ul class="footer__list">
          <li class="footer__item">
            <a class="footer__link" href="https://github.com/kadonomaro" target="_blank">Github</a>
          </li>
        </ul>
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
    &__list {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    &__item {
      margin-bottom: 5px;
    }
    &__link {
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

  @media screen and (max-width: 767px) {
    .footer {

      &__inner {
        display: block;
      }
      &__col {
        max-width: 100%;
        margin-bottom: 20px;
      }
      &__logo {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>

<template>
  <nav class="tabs">
    <ul class="tabs__list">
      <li class="tabs__item">
        <router-link class="tabs__link" to="/">Все статьи</router-link>
      </li>
      <li class="tabs__item">
        <router-link class="tabs__link" to="/popular">Популярные</router-link>
      </li>
      <li class="tabs__item">
        <router-link class="tabs__link" to="/newest">Новинки</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>


export default {
  name: 'Tabs',
}
</script>

<style lang="scss">
  .tabs {
    padding: 10px 10px 0;
    background-color: $color-dark-gray;
    overflow-x: auto;
    &__list {
      display: flex;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    &__link {
      display: block;
      padding: 15px 25px 15px;
      color: $color-medium-gray;
      text-decoration: none;
      white-space: nowrap;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      transition: color 0.3s ease-in, background-color 0.3s ease-in;
    }
    &__link.router-link-exact-active {
      color: $color-accent;
      background-color: $color-gray;
    }
  }

  @media screen and (max-width: 767px) {
    .tabs {
      &__link {
        padding: 12px 10px;
      }
    }
  }
</style>

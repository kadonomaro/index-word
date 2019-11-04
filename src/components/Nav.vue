<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link class="nav__link" to="/">Home</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss">
  .nav {
    &__list {
      display: flex;
      list-style-type: none;
    }
    &__item {

    }
    &__link {
      display: block;
      padding: 5px 12px;
      color: inherit;
      text-decoration: none;
    }
  }
</style>

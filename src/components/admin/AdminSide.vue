<template>
  <div class="admin-side">
    <nav class="admin-side__nav side-nav">
      <ul class="side-nav__list">
        <li class="side-nav__item">
          <router-link class="side-nav__link" to="/admin">Home</router-link>
        </li>
        <li class="side-nav__item">
          <router-link class="side-nav__link" to="/admin/articles">Articles</router-link>
        </li>
        <li class="side-nav__item">
          <router-link class="side-nav__link" to="/admin/settings">Settings</router-link>
        </li>
        <li class="side-nav__item">
          <router-link class="side-nav__link" to="/">Exit</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Admin-side'
}
</script>

<style lang="scss">
  .admin-side {
    &__nav {

    }
  }

  .side-nav {
    &__list {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    &__item {

    }
    &__link {
      text-decoration: none;
    }
  }
</style>

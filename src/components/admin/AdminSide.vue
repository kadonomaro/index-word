<template>
  <div class="admin-side">
    <nav class="admin-side__nav side-nav">
      <ul class="side-nav__list">
        <li class="side-nav__item">
          <router-link class="side-nav__link" to="/admin">Home</router-link>
        </li>
        <li class="side-nav__item">
          <router-link class="side-nav__link side-nav__link--editor" to="/admin/editor">Editor</router-link>
        </li>
        <li class="side-nav__item">
          <router-link class="side-nav__link side-nav__link--settings" to="/admin/settings">Settings</router-link>
        </li>
        <li class="side-nav__item">
          <router-link class="side-nav__link side-nav__link--logout" to="/">Logout</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Admin-side',
}
</script>

<style lang="scss">
  .admin-side {
    &__nav {
      height: 100%;
    }
  }
  .side-nav {
    background-color: #3c4c67;

    &__list {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    &__item {

    }
    &__link {
      position: relative;
      display: block;
      padding: 15px 15px 15px 40px;
      color: #ffffff;
      text-align: initial;
      text-decoration: none;
      transition: background-color 0.2s ease-in, color 0.2s ease-in;
      &:hover,
      &:focus {
        background-color: darken($color: #3c4c67, $amount: 5%);
      }
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 10px;
        width: 20px;
        height: 20px;
        background-image: url('~@/assets/admin/icons.svg');
        background-repeat: no-repeat;
        transform: translateY(-50%);
        transition: filter 0.2s ease-in;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 3px;
        background-color: #6bdaed;
        transition: background-color 0.2s ease-in;
        opacity: 0;
      }
    }
    &__link.router-link-exact-active {
      background-color: #293344;
      &::after,
      &::after {
        opacity: 1;
      }
    }
    &__link--editor {
      &::before {
        background-position-x: -50px;
      }
    }
    &__link--settings {
      &::before {
        background-position-x: -25px;
      }
    }
    &__link--logout {
      &::before {
        background-position-x: -75px;
      }
    }
  }
</style>

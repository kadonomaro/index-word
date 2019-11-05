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

  .side-nav {
    &__list {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    &__item {
      border-top: 1px solid #ffffff;
      border-bottom: 1px solid #ffffff;
    }
    &__link {
      position: relative;
      display: block;
      padding: 10px 10px 10px 50px;
      color: #303030;
      text-align: initial;
      text-decoration: none;
      transition: background-color 0.2s ease-in, color 0.2s ease-in;
      &:hover,
      &:focus {
        color: #ffffff;
        background-color: #5cb8c9;
      }
      &:hover::before,
      &:focus::before {
        filter: invert(100);
      }
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 10px;
        width: 25px;
        height: 25px;
        background-image: url('~@/assets/admin/icons.svg');
        background-repeat: no-repeat;
        transform: translateY(-50%);
        transition: filter 0.2s ease-in;
      }
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -10px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px 0 20px 10px;
        border-color: transparent transparent transparent #5cb8c9;
        transform: translate(0, -50%);
        opacity: 0;
      }
    }
    &__link.router-link-exact-active {
      color: #ffffff;
      background-color: #5cb8c9;
      &::before {
        filter: invert(100);
      }
      &::after {
        opacity: 1;
      }
    }
    &__link--editor {
      &::before {
        background-position-x: -70px;
      }
    }
    &__link--settings {
      &::before {
        background-position-x: -35px;
      }
    }
    &__link--logout {
      &::before {
        background-position-x: -105px;
      }
    }
  }
</style>

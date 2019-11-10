<template>
  <div class="settings">
    <h1>Settings</h1>
    <form class="settings__form" action="">
      <ul class="settings__list">
        <li class="settings__item setting" v-for="(value, name) in settings" :key="name">
          <span class="setting__title">{{ title(name) }}</span>
          <input class="setting__value" type="text" :value="value">
          <button class="setting__button" @click.prevent="">Save</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Settings',
  computed: {
    ...mapGetters([
      'settings'
    ]),
  },
  methods: {
    title(string) {
      return string.split(/(?=[A-Z])/).join(' ');
    }
  }
}
</script>

<style lang="scss">
  .settings {
    &__list {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    &__item {
      margin-bottom: 25px;
    }
  }
  .setting {
    &__title {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    &__value,
    &__button {
      padding: 5px 10px;
      font-size: 16px;
      border: 2px solid #303030;
    }
    &__value {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &__button {
      background-color: transparent;
      border-left: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      transition: background-color 0.2s ease-in, color 0.2s ease-in;
      cursor: pointer;
      &:hover {
        color: #ffffff;
        background-color: #303030;
      }
    }
  }
</style>

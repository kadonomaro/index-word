<template>
  <div class="settings">
    <h1 class="settings__title admin__title">Settings</h1>
    <form class="settings__form" action="">
      <ul class="settings__list">
        <li class="settings__item" v-for="(value, name) in settings" :key="name">
          <setting-item :name="name" :value="value" />
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SettingItem from '@/components/admin/SettingItem.vue';
export default {
  name: 'AppSettings',
  components: {
    SettingItem,
  },
  name: 'Settings',
  computed: {
    ...mapGetters([
      'settings'
    ]),
  },

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
</style>

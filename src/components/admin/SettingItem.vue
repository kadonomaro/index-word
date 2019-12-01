<template>
  <li class="setting-item">
    <span class="setting-item__title">{{ setTitle(name) }}:</span>
    <input
      type="text"
      :class="['setting-item__value', {'setting-item__value--error': hasError}]"
      :value="val"
      @input="value = $event.target.value"
    >
    <button class="setting-item__button" @click.prevent="setSettings({[name]: +value})">Save</button>
  </li>
</template>

<script>
export default {
  name: 'SettingItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    val: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      hasError: false,
      value: ''
    }
  },
  created() {
    this.value = ''+this.val;
  },
  methods: {
    setTitle(string) {
      return string.split(/(?=[A-Z])/).join(' ').toLowerCase();
    },
    setSettings(settings) {
      this.$store.commit('uploadSettings', settings);
    },
    inputValidate() {
      this.hasError = (/^[0-9]*$/g).test(this.val);
    },
  }
}
</script>

<style lang="scss">
  .setting-item {
    &__title {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    &__value,
    &__button {
      padding: 5px 10px;
      font-size: 16px;
      font-family: inherit;
      border: 2px solid #303030;
    }
    &__value {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &__value--error {
      background-color: #ffe0e0;
      border-color: #ff3333;
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

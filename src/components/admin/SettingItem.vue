<template>
  <div class="setting-item">
    <span class="setting-item__title">{{ setTitle(name) }}:</span>
    <input :class="['setting-item__value', {'setting-item__value--error': hasError}]" type="text" :value="value" @input="editSettings">
    <button class="setting-item__button" @click.prevent="setSettings({[name]: val})">Save</button>
  </div>
</template>

<script>
export default {
  name: 'SettingItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      val: null,
      hasError: false
    }
  },
  methods: {
    setTitle(string) {
      return string.split(/(?=[A-Z])/).join(' ').toLowerCase();
    },
    setSettings(settings) {
      this.$store.commit('uploadSettings', settings);
    },
    editSettings(event) {
      if (this.errorClass(event)) {
        this.val = event.target.value;
        this.hasError = false;
      } else {
        this.hasError = true;
      }
    },
    inputValidate(event) {
      return (/^[0-9]*$/g).test(event.target.value);
    }
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

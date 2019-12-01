<template>
  <button
    class="button"
    :class="theme ? 'button--' + theme : ''"
    @click="clickHandler"
  >{{ text }}</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: false
    }
  },
  methods: {
    clickHandler() {
      this.$emit('click-handler');
    }
  }
}
</script>

<style lang="scss">
  .button {
    display: inline-block;
    padding: 6px 16px;
    color: inherit;
    font-family: inherit;
    font-size: 18px;
    text-decoration: none;
    background-color: transparent;
    border: 2px solid #303030;
    border-radius: 5px;
    transition: color 0.2s ease-in, background-color 0.2s ease-in;
    cursor: pointer;
    &:hover,
    &:focus {
      color: #ffffff;
      background-color: #303030;
    }
  }
  .button--active {
    color: #606060;
    background-color: #cccccc;
  }
  .button--light {
    border-color: #cccccc;
    &:hover,
    &:focus {
      color: #606060;
      background-color: #cccccc;
    }
  }
  .button--danger {
    border-color: #fd3333;
    &:hover,
    &:focus {
      background-color: #fd3333;
    }
  }

  @media screen and (max-width: 767px) {
    .button {
      font-size: 14px;
    }
  }

</style>

<template>
  <button
    class="button"
    :class="theme ? 'button--' + theme : ''"
    @click.prevent="clickHandler"
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
    padding: 5px 25px;
    color: inherit;
    font-family: inherit;
    font-size: 18px;
    text-decoration: none;
    background-color: transparent;
    border: 2px solid $color-accent;
    border-radius: 5px;
    transition: color 0.2s ease-in, background-color 0.2s ease-in;
    cursor: pointer;
    &:hover,
    &:focus {
      color: $color-text;
      background-color: $color-accent;
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
      padding: 8px 18px;
    }
  }

</style>

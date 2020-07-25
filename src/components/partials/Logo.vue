<template>
  <div class="logo">
    <div class="logo__image">
      <img :src="image" alt="Index Word">
    </div>
    <span class="logo__title" v-if="text">Index Word</span>
  </div>
</template>

<script>
import image from '@/assets/logo.svg';
export default {
  name: 'Logo',
  props: {
    text: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      image
    }
  }
}
</script>

<style lang="scss">
  .logo {
    display: flex;
    align-items: center;
    &__image {
      width: 60px;
      height: 60px;
      margin-right: 10px;
      pointer-events: none;
    }
    &__title {
      display: block;
      font-size: 24px;
      font-weight: bold;
      user-select: none;
    }
  }
</style>

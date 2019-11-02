<template>
  <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">{{ title }}</h1>
      <div class="hero__image"><img :src="heroImage" alt=""></div>
    </div>
  </div>
</template>

<script>
import heroImage from '@/assets/read.svg';
export default {
  name: 'Hero',
  data() {
    return {
      title: 'Что почитать на этой неделе?',
      heroImage
    }
  }
}
</script>

<style lang="scss">
  .hero {
    color: #ffffff;
    background-color: #6bdaed;
    &__inner {
      padding: 30px 10px;
    }
    &__title {
      margin: 0 0 20px;
    }
    &__image {
      display: flex;
      justify-content: center;
      max-height: 200px;
    }
  }
</style>

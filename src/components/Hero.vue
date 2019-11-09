<template>
  <div class="hero">
    <div class="hero__inner">
      <div class="hero__main">
        <h1 class="hero__title">{{ title }}</h1>
        <span class="hero__subtitle">{{ subtitle }}</span>
      </div>
      <div class="hero__side">
        <div class="hero__image"><img :src="heroImage" alt="Человек читает книгу" width="600"></div>
      </div>
    </div>
  </div>
</template>

<script>
import heroImage from '@/assets/man.png';
export default {
  name: 'Hero',
  data() {
    return {
      title: 'Что почитать на этой неделе?',
      subtitle: 'Мы собрали для вас самые интересные статьи за этот период',
      heroImage
    }
  }
}
</script>

<style lang="scss">
  .hero {
    color: #ffffff;
    background-color: #6bdaed;
    box-shadow: inset 0 5px 7px rgba($color: #000000, $alpha: 0.15),
                inset 0 -5px 7px rgba($color: #000000, $alpha: 0.15);
    &__inner {
      display: flex;
      align-items: center;
      padding: 0 10px;
    }
    &__main {
      flex-basis: 60%;
      padding: 10px;
      text-align: right;
    }
    &__side {
      flex-basis: 40%;
    }
    &__title {
      margin: 0 0 20px;
      font-size: 36px;
    }
    &__subtitle {
      display: block;
      margin-bottom: 10px;
      font-size: 24px;
    }
    &__image {
      padding-top: 20px;
    }
  }
</style>

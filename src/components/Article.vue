<template>
  <article class="article">
    <h2 class="article__title">{{ title }}</h2>
    <div class="article__image">
      <img src="https://via.placeholder.com/400x200" alt="">
    </div>
    <div class="article__text">
      <p>{{ text }}</p>
      <time datetime="" class="article__date">{{ date }}</time>
    </div>
  </article>
</template>

<script>
export default {
  props: ['id', 'title', 'text', 'image', 'date'],
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
  .article {
    padding: 10px;
    border: 1px solid #606060;
    &__title {
      margin: 0 0 10px;
    }
    &__text {
      margin-bottom: 10px;
    }
  }
</style>

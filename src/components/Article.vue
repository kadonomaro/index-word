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
    <button class="article__button">Читать</button>
  </article>
</template>

<script>
export default {
  name: 'Article',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: true,
    },
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
  .article {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #cdcdcd;
    box-sizing: border-box;
    &__title {
      position: absolute;
      top: 10px;
      right: 10px;
      left: 10px;
      margin: 0 0 10px;
      padding: 4px 8px;
      background-color: rgba($color: #000000, $alpha: 0.2);
    }
    &__image {
      width: 100%;
    }
    &__text {
      flex-grow: 1;
      margin-bottom: 10px;
      padding: 10px;
    }
    &__date {
      padding: 4px 12px;
      color: #ffffff;
      font-size: 18px;
      background-color: rgba($color: #000000, $alpha: 0.7)
    }
    &__button {
      margin: 10px;
      padding: 6px 12px;
      background-color: transparent;
      border: 1px solid #303030;
      cursor: pointer;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
      &:hover {
        color: #ffffff;
        background-color: #303030;
      }
    }
  }
</style>

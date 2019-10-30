<template>
  <article class="article">

    <div class="article__image">
      <img class="article__image-img" :src="image" alt="">
    </div>
    <div class="article__text">
      <h2 class="article__title">{{ title }}</h2>
      <slot></slot>
    </div>
    <footer class="article__footer">
      <button class="article__button" @click="clickHandler">Читать</button>
      <time datetime="" class="article__date">{{ date }}</time>
    </footer>

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
    image: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: true,
    },
    popularity: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {

    };
  },
  methods: {
    increasePopularity() {
      this.$store.commit('increasePopularity', this.id);
    },
    clickHandler() {
      this.increasePopularity();
    }
  },
};
</script>

<style lang="scss">
  .article {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #f6f6f6;
    border: 1px solid #ececec;
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;
    &__title {
      margin: 0 0 10px;
      color: #606060;
      font-size: 20px;
      text-align: center;
    }
    &__image {
      width: 100%;
    }
    &__image-img {
      max-height: 300px;
      object-fit: cover;
    }
    &__text {
      flex-grow: 1;
      margin-bottom: 10px;
      padding: 10px;
      text-align: left;
      h3, h4, h5, h5, p, ul, ol {
        margin: 0 0 10px;
      }
      ul, ol {
        padding-left: 25px;
      }
    }
    &__footer {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
    }
    &__date {
      padding: 6px 12px;
      color: #ffffff;
      font-size: 18px;
      background-color: rgba($color: #000000, $alpha: 0.7);
      border-radius: 5px;
    }
    &__button {
      margin-right: 5px;
      padding: 8px 16px;
      font-size: 18px;
      background-color: transparent;
      border: 1px solid #303030;
      border-radius: 5px;
      cursor: pointer;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
      &:hover {
        color: #ffffff;
        background-color: #303030;
      }
    }
  }
</style>

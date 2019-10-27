<template>
  <article class="article">
    <h2 class="article__title">{{ title }}</h2>
    <div class="article__image">
      <img src="https://via.placeholder.com/400x200" alt="">
    </div>
    <div class="article__text">
      <slot></slot>
    </div>
    <footer class="article__footer">
      <button class="article__button" @click="increasePopularity">Читать</button>
      <time datetime="" class="article__date">{{ date }}</time>
      {{ popularity }}
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
      background-color: rgba($color: #000000, $alpha: 0.7)
    }
    &__button {
      margin-right: 5px;
      padding: 6px 12px;
      font-size: 18px;
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

<template>
  <article class="article">

    <div class="article__image">
      <img class="article__image-img" :src="image" alt="">
    </div>
    <div class="article__text">
      <h2 class="article__title">{{ title }}</h2>
      <div v-html="stringExplode"></div>
    </div>
    <footer class="article__footer">
      <router-link
        class="article__button"
        :to="{
          name: 'article-page',
          params: {
            id,
            title,
            image,
            text,
            date,
            popularity
            }
          }"
        >Далее</router-link>
      <time datetime="" class="article__date">{{ date.toLocaleString() }}</time>
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
    text: {
      type: String,
      required: true
    },
    date: {
      type: Date,
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
  computed: {
    stringExplode() {
      return this.text.split('</p>')[0];
    }
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
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;
    transition: box-shadow 0.2s ease-in-out, filter 0.2s ease-in-out;
    &:hover {
      filter: brightness(0.95);
      box-shadow: 0 10px 15px -10px rgba(30,45,62,.21),
                  0 5px 40px -10px rgba(31,44,60,.1);
    }
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
      width: 100%;
      max-height: 300px;
      object-fit: cover;
    }
    &__text {
      flex-grow: 1;
      padding: 15px 20px;
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
      padding: 15px 20px;
      background-color: darken($color: #f6f6f6, $amount: 5%);
      box-sizing: border-box;
    }
    &__date {
      padding: 6px 12px;
      color: #ffffff;
      font-size: 18px;
      background-color: #5cb8c9;
      border-radius: 5px;
    }
    &__button {
      margin-right: 5px;
      padding: 5px 16px;
      color: inherit;
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
  }
</style>

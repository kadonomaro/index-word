<template>
    <article class="article-detail">
      <a href="" class="article-detail__link" @click.prevent="goBack">Назад</a>
      <div class="article-detail__image">
        <img class="article-detail__image-img" :src="image" :alt="imageAlt">
      </div>
      <div class="article-detail__text">
        <h1 class="article-detail__title">{{ title }}</h1>
        <div v-html="text"></div>
      </div>
      <footer class="article-detail__footer">
        <time datetime="" class="article-detail__date">{{ date.toLocaleString() }}</time>
      </footer>
    </article>
</template>

<script>
export default {
  name: 'ArticleDetail',
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
      required: true,
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
    imageAlt() {
      return this.title.replace(/\?/g, '');
    }
  },
  mounted() {
    this.increasePopularity();
  },
  methods: {
    increasePopularity() {
      this.$store.commit('increasePopularity', this.id);
    },
    goBack() {
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="scss">
  .article-detail {
    padding: 20px 0;

    &__image {

    }
    &__image-img {

    }
    &__title {
      text-align: center;
    }
    &__text {
      margin-bottom: 20px;
      padding: 0 50px;

      h3, h4, h5, h5, p, ul, ol {
        margin: 0 0 10px;
      }
      ul, ol {
        padding-left: 25px;
      }
    }
    &__link {
      display: inline-block;
      margin-bottom: 20px;
      padding: 5px 16px;
      color: inherit;
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

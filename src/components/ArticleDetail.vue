<template>
  <div class="article-detail-wrapper">

    <article class="article-detail">
      <a href="" class="" @click.prevent="goBack">Назад</a>
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

  </div>
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
  .article-detail-wrapper {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 10px;
  }
  .article-detail {
    padding: 20px 0;
  }
</style>

<template>
    <article class="article-detail">
      <div class="article-detail__inner">
        <app-button
          class="article-detail__link"
          :text="'Назад'"
          @click-handler="goBack"
        />
        <div class="article-detail__image">
          <img class="article-detail__image-img" :src="image" :alt="imageAlt">
        </div>
        <div class="article-detail__text">
          <h1 class="article-detail__title">{{ title }}</h1>
          <div v-html="text"></div>
        </div>
      </div>
      <footer class="article-detail__footer">
        <time datetime="" class="article-detail__date">{{ date.toLocaleString() }}</time>
      </footer>
      <article-comments :comments="comments" :articleID="id" v-if="comments"/>
    </article>
</template>

<script>
import AppButton from '@/components/blocks/AppButton.vue';
import ArticleComments from '@/components/ArticleComments.vue';

export default {
  name: 'ArticleDetail',
  components: {
    AppButton,
    ArticleComments
  },
  props: {
    id: {type: String, required: true},
    title: {type: String, required: true},
    image: {type: String, required: false},
    text: {type: String, required: true},
    date: {type: Date, required: true},
    popularity: {type: Number, required: true},
    comments: {type: Array, required: false }
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

    &__inner {
      max-width: 1200px;
      margin: 0 auto;
    }
    &__image-img {
      width: 100%;
      max-width: 100%;
      max-height: 600px;
      object-fit: cover;
    }
    &__title {
      margin: 0 0 20px;
      text-align: center;
    }
    &__text {
      padding: 20px 50px;
      background-color: #f6f6f6;

      h3, h4, h5, h5, p, ul, ol {
        margin: 0 0 10px;
      }
      ul, ol {
        padding-left: 25px;
      }
    }
    &__link {
      margin-bottom: 20px;
    }
    &__footer {
      margin-bottom: 20px;
      padding: 10px;
      background-color: #5cb8c9;
      border-radius: 5px;
    }
    &__date {
      color: #ffffff;
      font-size: 18px;
      font-weight: bold;
    }
  }
</style>

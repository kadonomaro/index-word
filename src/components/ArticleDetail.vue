<template>
    <article v-if="article" class="article-detail">
      <div class="article-detail__inner">
        <app-button
          class="article-detail__link"
          :text="'Назад'"
          @click-handler="$router.go(-1)"
        />
        <div class="article-detail__image">
          <img class="article-detail__image-img" :src="article.image" :alt="article.title">
        </div>
        <div class="article-detail__text">
          <h1 class="article-detail__title">{{ article.title }}</h1>
          <div v-html="article.text"></div>
        </div>
      </div>
      <footer class="article-detail__footer">
        <time datetime="" class="article-detail__date">{{ article.date.toLocaleString() }}</time>
      </footer>
      <article-comments :comments="article.comments" :articleID="article.id"/>
    </article>
</template>

<script>
import AppButton from '@/components/blocks/AppButton.vue';
import ArticleComments from '@/components/ArticleComments.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ArticleDetail',
  components: {
    AppButton,
    ArticleComments
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'getArticleById'
    ]),
    article() {
      return this.getArticleById(this.id);
    }
  },
  mounted() {
    this.increasePopularity();
  },
  methods: {
    increasePopularity() {
      setTimeout(() => {
        this.$store.commit('increasePopularity', this.id);
      }, 3000);
    }
  },
};
</script>

<style lang="scss">
  .article-detail {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;

    &__image-img {
      width: 100%;
      max-width: 100%;
      max-height: 720px;
      object-fit: cover;
    }
    &__title {
      margin: 0 0 20px;
      text-align: center;
    }
    &__text {
      padding: 20px 30px;
      background-color: #f9f9f9;

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
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    &__date {
      color: #ffffff;
      font-size: 18px;
      font-weight: bold;
    }
  }


  @media screen and (max-width: 767px) {
    .article-detail {

      &__text {
        padding: 10px;
      }
      &__title {
        margin-bottom: 10px;
      }
    }
  }
</style>

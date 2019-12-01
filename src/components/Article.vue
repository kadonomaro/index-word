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
      <app-button
        :text="'Читать'"
        @click-handler="$router.push({ name: 'article-detail', params: {id} })"
      />
      <time datetime="" class="article__date">{{ date.toLocaleString() }}</time>
    </footer>

  </article>
</template>

<script>
import AppButton from '@/components/blocks/AppButton.vue';

export default {
  name: 'Article',
  components: {
    AppButton
  },
  props: {
    id: {type: String, required: true},
    url: {type: String, required: true},
    title: {type: String, required: true},
    image: {type: String, required: false},
    text: {type: String, required: true},
    date: {type: Date, required: true},
    popularity: {type: [Number, String], required: true},
    comments: {type: Array, required: false}
  },
  computed: {
    stringExplode() {
      return this.text.split('</p>')[0];
    }
  }
};
</script>

<style lang="scss">
  .article {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #eaeaea;
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
      height: 300px;
      background-color: #f6f6f6;
      border: 2px solid #eaeaea;
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
      overflow: hidden;
    }
    &__image-img {
      width: 100%;
      height: 100%;
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
      background-color: #dcdcdc;
      box-sizing: border-box;
    }
    &__date {
      padding: 6px 12px;
      color: #ffffff;
      font-size: 18px;
      background-color: #5cb8c9;
      border: 2px solid #5cb8c9;
      border-radius: 5px;
    }
  }


  @media screen and (max-width: 767px) {
    .article {

      &__image {
        height: 200px;
      }
      &__text,
      &__footer {
        padding: 8px 12px;
      }
      &__date {
        padding: 6px;
        font-size: 14px;
      }
      &__button {
        font-size: 14px;
      }
    }
  }
</style>

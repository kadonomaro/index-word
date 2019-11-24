<template>
  <article class="editable-article">

    <div class="editable-article__image">
      <img class="editable-article__image-img" :src="article.image" alt="">
    </div>

    <div class="editable-article__text">
      <label class="editable-article__label">
        <span class="editable-article__field-caption">Title</span>
        <input type="text" class="editable-article__field" :value="article.title">
      </label>

      <label class="editable-article__label">
        <span class="editable-article__field-caption">Text</span>
        <textarea class="editable-article__field" rows="10" v-html="article.text"></textarea>
      </label>

    </div>

    <footer class="editable-article__footer">
      <app-button
        class="editable-article__button"
        :theme="'light'"
        :text="'Update'"
        @click-handler="updateArticle(article.id)"
      />
      <time datetime="" class="editable-article__date">{{ article.date.toLocaleString() }}</time>
    </footer>

  </article>
</template>

<script>
import AppButton from '@/components/blocks/AppButton.vue';

export default {
  name: 'ArticleItem',
  components: {
    AppButton
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {
    updateArticle(id) {
      console.log(id);
      // this.$store.dispatch('updateArticles', id);
    }
  }
}
</script>

<style lang="scss" scoped>
  .editable-article {
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    &__label {
      display: block;
      margin-bottom: 20px;
    }
    &__field-caption {
      display: block;
      margin-bottom: 5px;
      font-size: 18px;
      font-weight: bold;
    }
    &__field {
      width: 100%;
      padding: 5px 10px;
      border: 1px solid #cccccc;
      border-radius: 5px;
      box-sizing: border-box;
      resize: vertical;
    }
    &__text {
      max-height: 600px;
      overflow: auto;
    }
    &__button {
      margin-right: 10px;
    }
    &__date {
      margin-left: auto;
    }
    &__footer {
      display: flex;
      align-items: center;
      padding: 10px;
      color: #ffffff;
      background-color: #606060;
      border-radius: 5px;
    }
  }
</style>

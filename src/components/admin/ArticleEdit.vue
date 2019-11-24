<template>
  <div class="editable-articles">
    <div class="editable-articles__list">
      <div v-for="article in allArticles" :key="article.id" class="editable-articles__item">

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
            <time datetime="" class="editable-article__date">{{ article.date.toLocaleString() }}</time>
          </footer>
        </article>

        <div class="editable-articles__service">
          <app-button
            class="editable-articles__button"
            :theme="'light'"
            :text="'Update'"
            @click-handler="updateArticle(article.id)"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppButton from '@/components/blocks/AppButton.vue';

export default {
  name: 'ArticleEdit',
  components: {
    AppButton
  },
  computed: {
    ...mapGetters([
      'allArticles'
    ])
  },
  methods: {
    updateArticle(id) {
      console.log(id);
    }
  }

}
</script>

<style lang="scss">
  .editable-articles {
    &__list {
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      flex-basis: calc(33.3333% - 20px);
      margin: 10px;
    }
    &__service {
      padding: 10px 0;
    }
  }
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
    &__footer {
      padding: 5px 10px;
      color: #ffffff;
      background-color: #606060;
      border-radius: 5px;
    }
  }
</style>

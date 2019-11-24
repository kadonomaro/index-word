<template>
  <article class="editable-article">

    <div class="editable-article__image">
      <img class="editable-article__image-img" :src="article.image" alt="">
    </div>

    <div class="editable-article__text">
      <label class="editable-article__label">
        <span class="editable-article__field-caption">Title</span>
        <input type="text"
          class="editable-article__field"
          :class="{ 'editable-article__field--editable': isEdit }"
          v-model="newArticle.title"
          :readonly="!isEdit"
        >
      </label>

      <label class="editable-article__label">
        <span class="editable-article__field-caption">URL</span>
        <input type="text"
          class="editable-article__field"
          :class="{ 'editable-article__field--editable': isEdit }"
          v-model="newArticle.url"
          :readonly="!isEdit"
        >
      </label>

      <label class="editable-article__label">
        <span class="editable-article__field-caption">Text</span>
        <textarea
          class="editable-article__field"
          rows="10"
          :class="{ 'editable-article__field--editable': isEdit }"
          v-html="newArticle.text"
          v-model="newArticle.text"
          :readonly="!isEdit"
        ></textarea>
      </label>

    </div>

    <footer class="editable-article__footer">
      <app-button
        class="editable-article__button"
        :theme="'light'"
        :text="'Update'"
        @click-handler="updateArticle"
      />
      <app-button
        class="editable-article__button"
        :theme="'light'"
        :text="'Edit'"
        @click-handler="editArticle"
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
      isEdit: false,
      newArticle: {
        title: this.article.title,
        text: this.article.text,
        date: this.article.date,
        url: this.article.url
      }
    }
  },
  methods: {
    updateArticle() {
      let updatedArticle = Object.assign(this.newArticle, this.article);
      this.$store.dispatch('updateArticle', updatedArticle);
      this.isEdit = false;
    },
    editArticle() {
      this.isEdit = true;
    }
  }
}
</script>

<style lang="scss">
  .editable-article {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 5px;
    box-sizing: border-box;
    &__label {
      display: block;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
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
      font-size: 16px;
      background-color: #eeeeee;
      border: 1px solid #cccccc;
      border-radius: 5px;
      box-sizing: border-box;
      resize: vertical;
    }
    &__field--editable {
      background-color: transparent;
    }
    &__text {
      max-height: 600px;
      padding: 10px 0;
      flex-grow: 1;
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

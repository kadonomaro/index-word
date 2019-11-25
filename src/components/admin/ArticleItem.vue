<template>
  <article class="editable-article">

    <div class="editable-article__image">
      <img class="editable-article__image-img" :src="article.image" alt="">
      <input class="editable-article__file" type="file">
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
        <ckeditor
          :editor="editor"
          tag-name="textarea"
          :config="editorConfig"
          v-model="newArticle.text"
          :disabled="!isEdit"
        ></ckeditor>
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
        :class="{ 'button--active' : isEdit }"
        :theme="'light'"
        :text="'Edit'"
        @click-handler="toggleArticleEdit"
      />
      <time datetime="" class="editable-article__date">{{ article.date.toLocaleString() }}</time>
      <input
        class="editable-article__checkbox"
        type="checkbox"
        :checked="isDateChange"
        v-model="isDateChange"
        title="Change date to now"
      >
    </footer>

  </article>
</template>

<script>
import AppButton from '@/components/blocks/AppButton.vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: 'ArticleItem',
  components: {
    AppButton,
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
        items: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedlist', 'numberedlist', '|', 'blockquote', 'insertTable', 'undo', 'redo' ],
    }
      },
      isEdit: false,
      isDateChange: false,
      newArticle: {
        title: this.article.title,
        text: this.article.text,
        date: new Date(),
        url: this.article.url,
        popularity: this.article.popularity,
        comments: this.article.comments
      }
    }
  },
  methods: {
    updateArticle() {
      this.isDateChange ? this.newArticle.date = new Date() : this.newArticle.date = this.article.date;
      this.$store.commit('updateArticle', [this.article.id ,this.newArticle]);
      this.isEdit = false;
    },
    toggleArticleEdit() {
      this.isEdit = !this.isEdit;
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
    &__image-img {
      width: 100%;
      margin-bottom: 10px;
    }
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
      transition: background-color 0.2s ease-in, box-shadow 0.2s ease-in;
    }
    &__field--editable {
      background-color: transparent;
      box-shadow: inset 0 0 3px rgba($color: #000000, $alpha: 0.2);
    }
    &__checkbox {
      width: 20px;
      height: 20px;
      margin: 0 0 0 10px;
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

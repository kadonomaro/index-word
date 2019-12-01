<template>
  <article class="editable-article-detail">
    <app-button
      class="editable-article__button"
      :text="'Prev'"
      @click-handler="$router.go(-1)"
    />
    <div class="editable-article-detail__image">
      <img class="editable-article-detail__image-img" :src="newArticleImage" alt="">
      <input
        class="editable-article-detail__file"
        type="file"
        accept="image/*"
        @change="imageSelectHandler"
      >
    </div>

    <div class="editable-article-detail__text">
      <label class="editable-article-detail__label">
        <span class="editable-article-detail__field-caption">Title</span>
        <input type="text"
          class="editable-article-detail__field"
          :class="{ 'editable-article-detail__field--editable': isEdit }"
          v-model="newArticle.title"
        >
      </label>

      <label class="editable-article-detail__label">
        <span class="editable-article-detail__field-caption">URL</span>
        <input type="text"
          class="editable-article-detail__field"
          :class="{ 'editable-article-detail__field--editable': isEdit }"
          v-model="newArticle.url"
        >
      </label>

      <label class="editable-article-detail__label">
        <span class="editable-article-detail__field-caption">Popularity</span>
        <input type="text"
          class="editable-article-detail__field"
          :class="{ 'editable-article-detail__field--editable': isEdit }"
          v-model="newArticle.popularity"
        >
      </label>

      <label class="editable-article-detail__label">
        <span class="editable-article-detail__field-caption">Text</span>
        <ckeditor
          :editor="editor"
          tag-name="textarea"
          :config="editorConfig"
          v-model="newArticle.text"
        ></ckeditor>
      </label>

    </div>

    <footer class="editable-article-detail__footer">
      <app-button
        class="editable-article-detail__button"
        :theme="'light'"
        :text="'Create'"
        @click-handler="createArticle"
      />
    </footer>

  </article>
</template>

<script>
import AppButton from '@/components/blocks/AppButton.vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: 'ArticleItemNew',
  components: {
    AppButton,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
        items: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedlist', 'numberedlist', '|', 'blockquote', 'insertTable', 'undo', 'redo' ],
        }
      },
      isEdit: true,
      newArticle: {
        title: '',
        text: '',
        date: new Date(),
        url: '',
        popularity: '',
        comments: []
      },
      newArticleImage: '',
      base64Image: ''
    }
  },
  methods: {
    updateArticle() {
      if (this.isEdit) {
        this.isDateChange ? this.newArticle.date = new Date() : this.newArticle.date = this.article.date;
        this.$store.commit('updateArticle', [this.article.id ,this.newArticle]); // need to fix this by dispatch
        if (this.base64Image) {
          this.$store.dispatch('uploadImage', [this.base64Image, this.article.id]);
        }
        this.isEdit = false;
      }
    },
    createArticle() {
      this.$store.dispatch('createArticle', [this.newArticle, this.base64Image]);
    },
    imageSelectHandler(event) {
      const image = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = event => {
        this.newArticleImage = event.target.result;
        this.base64Image = image;
      };
    }
  }
}
</script>

<style lang="scss">
  .editable-article-detail {
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 5px;
    &__image {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #cccccc;
    }
    &__image-img {
      height: 400px;
      margin: 0 auto 10px;
      object-fit: cover;
    }
    &__label {
      display: block;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    &__field-caption {
      display: block;
      margin-bottom: 5px;
      font-size: 16px;
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
      padding: 10px 0;
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

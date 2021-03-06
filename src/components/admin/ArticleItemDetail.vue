<template>
  <article class="editable-article-detail">
    <app-button
      class="editable-article__button"
      :text="'Back'"
      @click-handler="$router.go(-1)"
    />
    <div class="editable-article-detail__image">
      <img class="editable-article-detail__image-img" :src="newArticleImage" alt="">
      <label class="editable-article-detail__label">
        <input
          v-if="isEdit"
          class="editable-article-detail__file"
          type="file"
          accept="image/*"
          @change="imageSelectHandler"
        >
        <span v-if="isEdit" class="editable-article-detail__file-custom">Choose a image</span>
      </label>
    </div>

    <div class="editable-article-detail__text">

      <label class="editable-article-detail__label">
        <span class="editable-article-detail__field-caption">Active</span>
        <input type="checkbox"
          class="editable-article-detail__checkbox"
          v-model="newArticle.isActive"
        >
      </label>
      <label class="editable-article-detail__label">
        <span class="editable-article-detail__field-caption">Title</span>
        <input type="text"
          class="editable-article-detail__field"
          :class="{ 'editable-article-detail__field--editable': isEdit }"
          v-model="newArticle.title"
          :readonly="!isEdit"
        >
      </label>

      <label class="editable-article-detail__label">
        <span class="editable-article-detail__field-caption">URL</span>
        <input type="text"
          class="editable-article-detail__field"
          :class="{ 'editable-article-detail__field--editable': isEdit }"
          v-model="newArticle.url"
          :readonly="!isEdit"
        >
      </label>

      <label class="editable-article-detail__label">
        <span class="editable-article-detail__field-caption">Popularity</span>
        <input type="text"
          class="editable-article-detail__field"
          :class="{ 'editable-article-detail__field--editable': isEdit }"
          v-model="newArticle.popularity"
          :readonly="!isEdit"
        >
      </label>

			<label class="editable-article-detail__label">
        <span class="editable-article-detail__field-caption">Tags</span>
        <input type="text"
          class="editable-article-detail__field"
          :class="{ 'editable-article-detail__field--editable': isEdit }"
          v-model="newArticle.tags"
          :readonly="!isEdit"
        >
      </label>

      <label class="editable-article-detail__label">
        <span class="editable-article-detail__field-caption">Text</span>
        <ckeditor
          :editor="editor"
          tag-name="textarea"
          :config="editorConfig"
          v-model="newArticle.text"
          :disabled="!isEdit"
        ></ckeditor>
      </label>

    </div>

    <footer class="editable-article-detail__footer">
      <app-button
        class="editable-article-detail__button"
        :class="{ 'button--active' : isEdit }"
        :theme="'light'"
        :text="'Edit'"
        @click-handler="changeEditStatus"
      />
      <app-button
        v-if="isEdit"
        class="editable-article-detail__button"
        :theme="'light'"
        :text="'Update'"
        @click-handler="updateArticle"
      />
      <time datetime="" class="editable-article-detail__date">{{ article.date.toLocaleString() }}</time>
      <input
        class="editable-article-detail__checkbox"
        type="checkbox"
        :checked="isDateChange"
        v-model="isDateChange"
        title="Change date to now"
      >
    </footer>

  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import AppButton from '@/components/blocks/AppButton.vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { stringToArray } from '@/helpers/stringToArray.js';
import UploadAdapter from '@/helpers/UploadAdapter.js';

export default {
  name: 'ArticleItemDetail',
  components: {
    AppButton,
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
        	items: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedlist', 'numberedlist', '|', 'imageUpload', '|', 'blockquote', 'insertTable', 'undo', 'redo' ],
				},
				extraPlugins: [this.uploader]
      },
      isEdit: false,
      isDateChange: false,
      newArticle: {
        title: '',
        text: '',
        date: '',
        url: '',
        popularity: '',
				comments: '',
				tags: '',
        isActive: ''
      },
      newArticleImage: '',
      base64Image: ''
    }
  },
  created(){
		this.newArticle = this.article;
		this.newArticle.date = new Date();
		this.newArticleImage = this.article.image;
  },
  methods: {
    updateArticle() {
      if (this.isEdit) {
				this.isDateChange ? this.newArticle.date = new Date() : this.newArticle.date = this.article.date;
				this.newArticle.tags = stringToArray(this.newArticle.tags);
        this.$store.dispatch('updateArticle', [this.article.id ,this.newArticle]);
        if (this.base64Image) {
          this.$store.dispatch('uploadImage', [this.base64Image, this.article.id]);
        }
        this.isEdit = false;
      }
    },
    changeEditStatus() {
      this.isEdit = !this.isEdit;
    },
    imageSelectHandler(event) {
      const image = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = evt => {
        this.newArticleImage = evt.target.result;
        this.base64Image = image;
      };
		},
		uploader(editor) {
			editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
				return new UploadAdapter(loader);
			}
		},

	},
	computed: {
    ...mapGetters([
      'getArticleById'
    ]),
    article() {
      return this.getArticleById(this.id);
    },
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
    &__file {
	    position: absolute;
      width: 0.1px;
      height: 0.1px;
      z-index: -1;
      opacity: 0;
      overflow: hidden;
    }
    &__file-custom {
      display: inline-block;
      padding: 5px 10px;
      font-size: 18px;
      border: 2px solid #303030;
      border-radius: 5px;
      transition: background-color 0.2s ease-in, color 0.2s ease-in;
      user-select: none;
      cursor: pointer;
      &:hover,
      &:focus {
        color: #ffffff;
        background-color: #303030;
      }
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

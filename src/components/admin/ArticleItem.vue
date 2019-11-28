<template>
  <article class="editable-article">

    <div class="editable-article__image">
      <img class="editable-article__image-img" :src="newArticleImage" alt="">
      <input
        v-if="isEdit"
        class="editable-article__file"
        type="file"
        accept="image/*"
        @change="imageSelectHandler"
      >
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
        <span class="editable-article__field-caption">Popularity</span>
        <input type="text"
          class="editable-article__field"
          :class="{ 'editable-article__field--editable': isEdit }"
          v-model="newArticle.popularity"
          :readonly="!isEdit"
        >
      </label>
    </div>

    <footer class="editable-article__footer">
      <app-button
        class="editable-article__button"
        :class="{ 'button--active' : isEdit }"
        :theme="'light'"
        :text="'Edit'"
        @click-handler="toggleArticleEdit"
      />
      <app-button
        class="editable-article__button"
        :theme="'light'"
        :text="'Open'"
        @click-handler="openArticle"
      />
      <app-button
        v-if="isEdit"
        class="editable-article__button"
        :theme="'light'"
        :text="'Update'"
        @click-handler="updateArticle"
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
      id: this.article.id,
      isEdit: false,
      isDateChange: false,
      newArticle: {
        title: this.article.title,
        text: this.article.text,
        date: new Date(),
        url: this.article.url,
        popularity: this.article.popularity,
        comments: this.article.comments
      },
      newArticleImage: this.article.image,
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
    toggleArticleEdit() {
      this.isEdit = !this.isEdit;
    },
    openArticle() {
      this.$router.push({ name: 'article-item-detail', params: { id: this.id }});
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
  .editable-article {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 5px;
    box-sizing: border-box;
    &__image {
      flex-basis: 30%;
      max-width: 30%;
      margin-bottom: 10px;
    }
    &__image-img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      object-position: center;
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
      margin-bottom: 10px;
      padding: 0 10px;
      flex-basis: 70%;
      max-width: 70%;
      box-sizing: border-box;
    }
    &__button {
      margin-right: 5px;
    }
    &__date {
      margin-left: auto;
    }
    &__footer {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 5px;
      color: #ffffff;
      background-color: #606060;
      border-radius: 5px;
    }
  }
</style>

<template>
  <div class="comments">
    <span class="comments__title">Оставьте свой комментарий</span>
    <button
      class="comments__button comments__button--add"
      @click="isCommentWrite = !isCommentWrite"
      title="Добавить комментарий"
    >+</button>

    <transition name="fade" mode="out-in">
      <div class="comments__add" v-if="isCommentWrite">
        <form action="" class="comments-form">
          <label class="comments-form__label">
            <input class="comments-form__field" type="text" placeholder="Имя" required v-model="newComment.author">
          </label>
          <label class="comments-form__label">
            <textarea class="comments-form__field"  rows="7" placeholder="Комментарий" required v-model="newComment.text"></textarea>
          </label>
          <transition name="fade" mode="out-in">
            <span class="comments-form__error" v-if="isValidateError">Оба поля должны быть заполнены</span>
          </transition>
					<app-button :text="'Отправить'" @click-handler="clickHandler"/>
        </form>
      </div>
    </transition>

    <ul class="comments__list">
      <li class="comments__item comment" v-for="(comment, index) in comments" :key="index">
        <span class="comment__author">{{ comment.author }}</span>
        <p class="comment__text">{{ comment.text }}</p>
        <span class="comment__date">{{ commentDate(comment.date) }}</span>
      </li>
    </ul>

  </div>
</template>

<script>
import AppButton from '@/components/blocks/AppButton.vue';

export default {
	name: 'ArticleComments',
	components: {
		AppButton
	},
  props: {
    articleID: {
      type: String,
      required: true
    },
    comments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isCommentWrite: false,
      isValidateError: false,
      newComment: {
        author: '',
        text: '',
        date: ''
      }
    }
  },
  methods: {
    commentDate(date) {
      return new Date(date.seconds * 1000).toLocaleString();
    },
    updateComments(comment) {
      this.$store.dispatch('updateComments', [this.articleID, comment]);
    },
    clickHandler() {
      this.newComment.date = new Date();
      let comment = {
        author: this.newComment.author,
        text: this.newComment.text,
        date: new Date()
      }
      if (comment.author && comment.text) {
        this.updateComments(comment);
        this.clearComment();
        this.isCommentWrite = !this.isCommentWrite;
      } else {
        this.isValidateError = true;
        setTimeout(() => {
          this.isValidateError = false;
        }, 2000);
      }

    },
    clearComment() {
      this.newComment.author = '';
      this.newComment.text = '';
      this.newComment.date = ''
    }
  }
}
</script>

<style lang="scss">
  .comments {
    padding: 10px 15px;
    background-color: $color-darkest;
    border-radius: 5px;
    &__title {
      display: block;
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }
    &__button {
      margin-bottom: 10px;
      padding: 5px 10px;
      color: $color-text;
      font-size: 16px;
      line-height: 1;
      background-color: $color-accent;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s ease-in;
      &:hover {
        background-color: darken($color: $color-accent, $amount: 10%);
      }
    }
    &__button--add {
      width: 30px;
      height: 30px;
      padding: 0;
      font-size: 30px;
    }
    &__add {
      margin-bottom: 20px;
    }
    &__list {
      margin: 0 0 10px;
      padding: 0;
      list-style-type: none;
    }
    &__item {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  .comments-form {
    &__title {
      display: block;
    }
    &__label {
      display: block;
      margin-bottom: 10px;
    }
    &__error {
      display: block;
      margin-bottom: 10px;
      color: #ff3333;
    }
    &__field {
      width: 100%;
      max-width: 300px;
      padding: 10px;
      font-size: 16px;
      font-family: inherit;
      border: none;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
      resize: none;
      box-sizing: border-box;
    }
  }

  .comment {
    padding: 5px;
    background-color: $color-gray;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
    &__author {
      display: block;
      margin-bottom: 10px;
			color: $color-accent;
			font-size: 18px;
      font-weight: bold;
    }
    &__text {
      margin: 0 0 10px;
      padding-left: 20px;
    }
    &__date {
      display: inline-block;
      padding: 4px 6px;
      color: #ffffff;
      font-size: 12px;
      font-weight: bold;
      border-radius: 5px;
    }
  }


  @media screen and(max-width: 767px) {
    .comments {
      padding: 10px;
      &__button {
        padding: 14px 18px;

      }
      &__button--add {
        width: 40px;
        height: 40px;
        padding: 0;
      }
    }
    .comments-form {

      &__field {
        padding: 12px 16px;
      }
    }
  }
</style>

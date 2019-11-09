<template>
  <div class="comments">
    <button class="comments__button" @click="isCommentWrite = !isCommentWrite">+</button>

    <transition name="fade" mode="out-in">
      <div class="comments__add" v-if="isCommentWrite">
        <form action="" class="comments-form">
          <label class="comments-form__label">
            <input class="comments-form__field" type="text" placeholder="Имя" required v-model="newComment.author">
          </label>
          <label class="comments-form__label">
            <textarea class="comments-form__field"  rows="7" placeholder="Комментарий" required v-model="newComment.text"></textarea>
          </label>
          <button @click.prevent="clickHandler">Сохранить</button>
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
export default {
  name: 'ArticleComments',
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
      newComment: {
        author: '',
        text: '',
        date: Date.now()
      }
    }
  },
  methods: {
    commentDate(date) {
      return new Date(date.seconds * 1000).toLocaleString();
    },
    updateComments() {
      this.$store.commit('updateComments', [this.articleID, this.newComment]);
    },
    clickHandler() {
      this.updateComments();
    }
  }
}
</script>

<style lang="scss">
  .comments {
    padding: 20px 20px;
    background-color: #ecf2f7;
    border-radius: 5px;
    &__button {
      width: 30px;
      height: 30px;
      margin-bottom: 10px;
      color: #ffffff;
      font-size: 30px;
      line-height: 1;
      background-color: #5cb8c9;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    &__add {
      margin-bottom: 20px;
    }
    &__list {
      margin: 0 0 20px;
      padding: 0;
      list-style-type: none;
    }
    &__item {
      margin-bottom: 10px;
    }
  }

  .comments-form {
    &__title {
      display: block;
    }
    &__label {
      display: block;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    &__field {
      width: 100%;
      max-width: 300px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
      resize: none;
      box-sizing: border-box;
    }
  }

  .comment {
    padding: 5px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
    &__author {
      display: block;
      margin-bottom: 10px;
      color: #303030;
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
      font-size: 14px;
      font-weight: bold;
      background-color: #5cb8c9;
      border-radius: 5px;
    }
  }
</style>

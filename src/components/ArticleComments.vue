<template>
  <div class="comments">
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
    comments: {
      type: Array,
      required: true
    }
  },
  methods: {
    commentDate(date) {
      return new Date(date.seconds * 1000).toLocaleString();
    }
  }
}
</script>

<style lang="scss">
  .comments {
    padding: 20px 20px;
    background-color: #ecf2f7;
    border-radius: 5px;
    &__list {
      margin: 0 0 20px;
      padding: 0;
      list-style-type: none;
    }
    &__item {
      margin-bottom: 10px;
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
      background-color: #606060;
      border-radius: 5px;
    }
  }
</style>

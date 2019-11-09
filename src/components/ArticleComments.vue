<template>
  <div class="comments">
      <ul class="comments__list">
        <li class="comments__item comment" v-for="(comment, index) in comments" :key="index">
          <span class="comment__author">{{ comment.author }}</span>
          <p class="comment__text">{{ comment.text }}</p>
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
  }
}
</script>

<style lang="scss">
  .comments {
    padding: 10px;
    border: 1px solid #303030;
    &__list {
      margin: 0 0 20px;
      list-style-type: none;
    }
    &__item {
      margin-bottom: 20px;
    }
  }

  .comment {
    padding: 5px;

    &__author {
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
    }
    &__text {
      margin: 0 0 10px;
      padding-left: 20px;
    }
  }
</style>

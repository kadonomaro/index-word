<template>
  <div class="empty-article">
    Здесь пока ничего нет
  </div>
</template>

<script>
export default {
  name: 'EmptyArticle'
}
</script>

<style lang="scss">
  .empty-article {
    margin: 0 10px;
    padding: 10px;
    background-color: $color-dark-gray;
    border: 1px solid $color-medium-gray;
    border-radius: 5px;
  }
</style>

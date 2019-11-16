<template>
  <div class="editor">
    <h1 class="admin__title">Edit Articles</h1>
    <article-edit />
  </div>
</template>

<script>
import ArticleEdit from '@/components/admin/ArticleEdit.vue';
export default {
  name: 'Editor',
  components: {
    ArticleEdit
  }
}
</script>

<style lang="scss">

</style>

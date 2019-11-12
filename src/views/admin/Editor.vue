<template>
  <div class="editor">
    <h1 class="admin__title">Edit Articles</h1>
    <editable-articles />
  </div>
</template>

<script>
import EditableArticles from '@/components/admin/EditableArticles.vue';
export default {
  name: 'Editor',
  components: {
    EditableArticles
  }
}
</script>

<style lang="scss">

</style>

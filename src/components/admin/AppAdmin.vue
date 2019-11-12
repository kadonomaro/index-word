<template>
  <div class="admin">
    <admin-side class="admin__side" />
    <admin-main class="admin__main"/>
  </div>
</template>

<script>
import AdminSide from '@/components/admin/AdminSide.vue';
import AdminMain from '@/components/admin/AdminMain.vue';
export default {
  name: 'AppAdmin',
  components: {
    AdminSide,
    AdminMain
  }
}
</script>

<style lang="scss">
  .admin {
    display: flex;
    min-height: 100vh;
    font-family: 'Roboto Condensed', sans-serif;
    &__side {
      position: relative;
      min-width: 250px;
      box-shadow: 5px 0 10px rgba($color: #000000, $alpha: 0.3);
    }
    &__main {
      flex-grow: 1;
    }
    &__title {
      margin: 0 0 20px;
      padding: 5px 10px;
      color: #ffffff;
      background-color: #3c4c67;
    }
  }
</style>

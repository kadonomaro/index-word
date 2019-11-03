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
  name: 'Admim',
  components: {
    AdminSide,
    AdminMain
  }
}
</script>

<style lang="scss">
  .admin {
    display: flex;
    &__side {
      flex-basis: 15%;
    }
    &__main {
      flex-basis: 85%;
    }
  }
</style>

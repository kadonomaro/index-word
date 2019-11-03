<template>
  <div class="admin-main">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .admin-main {
    background-color: #f4f7fd;
  }
</style>

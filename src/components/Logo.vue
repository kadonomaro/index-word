<template>
  <div class="logo">
    <div class="logo__image">
      <img src="https://via.placeholder.com/60x60" alt="Index Word">
    </div>
    <span class="logo__title">Index Word</span>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss">
  .logo {
    display: flex;
    align-items: center;
    &__image {
      margin-right: 10px;
    }
    &__title {
      display: block;
      font-size: 24px;
      font-weight: bold;
    }
  }
</style>

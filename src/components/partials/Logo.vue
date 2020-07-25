<template>
  <div class="logo">
    <div class="logo__image">
      <img :src="image" alt="Index Word">
    </div>
		<div class="logo__text" v-if="text">
			<span class="logo__title" >Index Word</span>
			<span class="logo__subtitle">Очередной ИТ блог</span>
		</div>

  </div>
</template>

<script>
import image from '@/assets/logo.svg';
export default {
  name: 'Logo',
  props: {
    text: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      image
    }
  }
}
</script>

<style lang="scss">
  .logo {
    display: flex;
    align-items: center;
    &__image {
      width: 60px;
      height: 60px;
      margin-right: 10px;
      pointer-events: none;
		}
		&__text {
			user-select: none;
		}
    &__title {
			display: block;
			color: #ffffff;
      font-size: 24px;
      font-weight: bold;
    }
		&__subtitle {
			display: block;
			font-size: 16px;
			color: $color-accent;
		}
  }
</style>

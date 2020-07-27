<template>
  <div class="hero">
    <div class="hero__inner">
      <div class="hero__main">
				<div class="hero__text">
					<h1 class="hero__title">{{ title }}</h1>
					<span class="hero__subtitle">{{ subtitle }}</span>
				</div>
      </div>
			<div class="hero__canvas">
				<app-canvas />
			</div>
    </div>
  </div>
</template>

<script>
import AppCanvas from '@/components/partials/Canvas/Canvas.vue';

export default {
	name: 'Hero',
	components: {
		AppCanvas
	},
  data() {
    return {
      title: 'Что почитать на этой неделе?',
      subtitle: 'Мы собрали для вас самые интересные статьи за этот период',
    }
	}
}
</script>

<style lang="scss">
  .hero {
    color: #ffffff;
    background-color: #202020;
    &__inner {
			position: relative;
    }
    &__main {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
		}
		&__text {
			padding: 10px 20px;
			background-color: rgba($color: #000000, $alpha: 0.7);
		}
    &__title {
      margin: 0 0 20px;
      font-size: 36px;
    }
    &__subtitle {
      display: block;
      margin-bottom: 10px;
      font-size: 24px;
    }
    &__image {
      padding-top: 20px;
    }
  }


  @media screen and (max-width: 767px) {
    .hero {

      &__inner {
        display: block;
      }
      &__main {
        padding: 10px 0;
        text-align: center;
      }
      &__title {
        font-size: 24px;
      }
      &__subtitle {
        font-size: 18px;
      }
    }
  }
</style>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <router-link class="navigation__link" to="/">Все статьи</router-link>
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/popular">Популярные</router-link>
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/newest">Новинки</router-link>
      </li>
    </ul>
		<div class="navigation__search">
			<smart-search :list="articlesTitle"/>
		</div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import SmartSearch from '@/components/partials/SmartSearch.vue';

export default {
	name: 'Navigation',
	components: {
		SmartSearch
	},
	computed: {
    ...mapGetters([
      'articlesTitle'
    ])
  }
}
</script>

<style lang="scss">
  .navigation {
		display: flex;
		align-items: center;
    padding: 10px 10px;
		background-color: $color-dark-gray;
		&__search {
			width: 100%;
			margin-left: 30px;
		}
    &__list {
      display: flex;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    &__link {
      display: block;
      padding: 15px 25px 15px;
      color: $color-medium-gray;
      text-decoration: none;
      white-space: nowrap;
      border-top-left-radius: 5px;
			border-top-right-radius: 5px;
			transform: translateY(10px);
      transition: color 0.3s ease-in, background-color 0.3s ease-in;
    }
    &__link.router-link-exact-active {
      color: $color-accent;
      background-color: $color-gray;
    }
  }

  @media screen and (max-width: 767px) {
    .navigation {
			flex-direction: column;
			&__search {
				order: -1;
				margin: 0;
			}
      &__link {
				padding: 12px 10px;
				transform: translateY(15px);
      }
    }
  }
</style>

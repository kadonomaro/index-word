<template>
	<div class="related">
		<div class="related__list">
			<div class="related__item" v-for="article in articles" :key="article.id">
				<article-item :article="article" />
			</div>
		</div>
	</div>
</template>

<script>
import ArticleItem from '@/components/Article/ArticleItem.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'RelatedArticles',
	components: {
		ArticleItem
	},
	props: {
		articles: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss">
	.related {
		&__item {
			&:not(:last-child) {
				margin-bottom: 20px;
			}
		}
	}


	@media screen and (max-width: 1024px) {
		.related {
			&__list {
				display: flex;
				margin: 0 -10px;
			}
			&__item {
				flex-basis: 50%;
				max-width: 50%;
				padding: 10px;
				&:not(:last-child) {
					margin-bottom: 0;
				}
			}
		}
	}


	@media screen and (max-width: 600px) {
		.related {
			&__list {
				display: block;
			}
			&__item {
				max-width: 100%;
			}
		}
	}
</style>

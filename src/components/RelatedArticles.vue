<template>
	<div class="related">
		<div class="related__list">
			<div class="related__item" v-for="article in relatedArticles" :key="article.id">
				<app-article :article="article" />
			</div>
		</div>
	</div>
</template>

<script>
import AppArticle from '@/components/Article.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'RelatedArticles',
	components: {
		AppArticle
	},
	computed: {
		...mapGetters([
			'relatedArticles'
		])
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
</style>

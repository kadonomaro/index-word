<template>
	<div class="article-tags">
		<ul class="article-tags__list">
			<li class="article-tags__item" v-for="tag in tags" :key="tag">
				<router-link :to="{ name: 'articles-tags', query: {tag} }" class="article-tags__link">{{ tag }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'ArticleTags',
	props: {
		tags: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss">
	.article-tags {
		padding: 5px 15px;
		text-align: left;
		&__list {
			display: flex;
			margin: 0;
			padding: 0;
			list-style: none;
		}
		&__item {
			&:not(:last-child) {
				margin-right: 10px;
			}
		}
		&__link {
			color: $color-medium-gray;
			transition: color 0.2s ease-in;
			&:hover {
				color: #ffffff;
			}
			&::before {
				content: '#';
			}
		}
	}
</style>

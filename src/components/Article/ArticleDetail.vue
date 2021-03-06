<template>
    <main v-if="article" class="article-detail">
      <div class="article-detail__inner">

				<article class="article-detail__main">
					<header class="article-detail__header">
						<app-button
							class="article-detail__link"
							:text="'Назад'"
							@click-handler="$router.go(-1)"
						/>
						<h1 class="article-detail__title">{{ article.title }}</h1>
					</header>
					<div class="article-detail__image">
						<img class="article-detail__image-img" :src="article.image" :alt="article.title">
					</div>
					<div class="article-detail__text">
						<div v-html="article.text"></div>
					</div>
					<div class="article-detail__tags" v-if="article.tags.length">
						<article-tags :tags="article.tags" />
					</div>
					<footer class="article-detail__footer">
						<time datetime="" class="article-detail__date">{{ article.date.toLocaleString() }}</time>
					</footer>
					<article-comments :comments="article.comments" :articleID="article.id"/>
				</article>

				<aside class="article-detail__side" v-if="related.length">
					<header class="article-detail__header">
						<h2 class="article-detail__title">Похожие статьи</h2>
					</header>
					<related-articles :articles="related" />
				</aside>

      </div>
    </main>
</template>

<script>
import AppButton from '@/components/blocks/AppButton.vue';
import ArticleComments from '@/components/Article/ArticleComments.vue';
import ArticleTags from '@/components/Article/ArticleTags.vue';
import RelatedArticles from '@/components/Article/RelatedArticles.vue';
import meta from '@/mixins/meta.mixin';
import { mapGetters } from 'vuex';

export default {
  name: 'ArticleDetail',
  components: {
    AppButton,
		ArticleComments,
		ArticleTags,
		RelatedArticles
	},
	mixins: [meta],
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters([
			'getArticleById',
			'relatedArticles'
    ]),
    article() {
      return this.getArticleById(this.id);
		},
		related() {
			return this.relatedArticles(this.article.tags, this.id)
		}
  },
  mounted() {
    this.increasePopularity();
  },
  methods: {
    increasePopularity() {
      setTimeout(() => {
        this.$store.dispatch('increasePopularity', this.id);
      }, 3000);
    }
  }
};
</script>

<style lang="scss">
  .article-detail {
    padding: 20px 0;
		&__inner {
			display: flex;
		}
		&__header {
			display: flex;
			align-items: center;
			margin-bottom: 10px;
		}
		&__main {
			flex-grow: 1;
		}
		&__side {
			flex-basis: 350px;
			max-width: 350px;
			flex-shrink: 0;
			padding-left: 20px;
		}

		&__image {
			border-top-left-radius: $border-radius;
			border-top-right-radius: $border-radius;
			overflow: hidden;
		}
    &__image-img {
      width: 100%;
      max-width: 100%;
      max-height: 720px;
      object-fit: cover;
    }
    &__title {
			flex-grow: 1;
      margin: 0;
			padding: 10px 5px;
      text-align: center;
    }
    &__text {
      padding: 20px 30px;
      background-color: $color-dark-gray;
			letter-spacing: 0.03em;
			line-height: 1.3;
      h3, h4, h5, h5, p, ul, ol, blockquote {
        margin: 0 0 10px;
      }
      ul, ol {
        padding-left: 25px;
      }
      blockquote {
        margin: 0 0 15px 25px;
        padding: 5px 5px 5px 10px;
        background-color: $color-gray;
        border-left: 5px solid $color-medium-dark-gray;
      }
      blockquote > p {
        &:last-child {
          margin-bottom: 0;
        }
      }
		}
		&__tags {
			background-color: $color-dark-gray;
		}
    &__footer {
      margin-bottom: 20px;
      padding: 10px;
      background-color: $color-darkest;
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &__date {
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
    }
  }

	@media screen and (max-width: 1024px) {
		.article-detail {
			&__inner {
				display: block;
			}
			&__main {
				margin-bottom: 20px;
			}
			&__side {
				max-width: 100%;
				padding: 0;
			}
		}
	}


  @media screen and (max-width: 767px) {
    .article-detail {
			&__header {
				display: block;
			}
      &__text {
        padding: 10px;
      }
    }
  }
</style>

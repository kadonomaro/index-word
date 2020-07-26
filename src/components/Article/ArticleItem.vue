<template>
  <article class="article">

    <div class="article__image">
			<router-link :to="{ name: 'article-detail', params: {id: this.article.id} }">
				<img class="article__image-img" :src="article.image" alt="">
			</router-link>
    </div>
    <div class="article__text">
      <h2 class="article__title">{{ article.title }}</h2>
      <div v-html="stringExplode"></div>
    </div>
		<div class="article__tags" v-if="article.tags.length">
			<div class="article-tags">
				<ul class="article-tags__list">
					<li class="article-tags__item" v-for="tag in article.tags" :key="tag">
						<router-link :to="'/'" class="article-tags__link">{{ tag }}</router-link>
					</li>
				</ul>
			</div>
		</div>
    <footer class="article__footer">
      <app-button
        :text="'Читать'"
        @click-handler="goToDetail"
      />
      <time datetime="" class="article__date">{{ article.date.toLocaleString() }}</time>
    </footer>

  </article>
</template>

<script>
import AppButton from '@/components/blocks/AppButton.vue';

export default {
  name: 'ArticleItem',
  components: {
    AppButton
  },
  props: {
		article: {
			type: Object,
			required: true
		}
	},
	methods: {
		goToDetail() {
			this.$router.push({ name: 'article-detail', params: {id: this.article.id} });
		}
	},
  computed: {
    stringExplode() {
      return this.article.text.split('</p>')[0];
    }
  }
};
</script>

<style lang="scss">
  .article {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
		height: 100%;
    background-color: $color-dark-gray;
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;
    transition: box-shadow 0.2s ease-in-out, filter 0.2s ease-in-out;
    &:hover {
      filter: brightness(0.95);
      box-shadow: 0 10px 20px rgba(255,255,255,.1);
    }
    &__title {
      margin: 0 0 20px;
      color: $color-light-gray;
      font-size: 20px;
      text-align: center;
    }
    &__image {
      height: 225px;
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
      overflow: hidden;
    }
    &__image-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__text {
      flex-grow: 1;
      width: 100%;
      padding: 10px 15px;
			text-align: left;
			letter-spacing: 0.03em;
			line-height: 1.3;
      box-sizing: border-box;
      h3, h4, h5, h5, p, ul, ol {
        margin: 0 0 10px;
      }
      ul, ol {
        padding-left: 25px;
      }
    }
		&__tags {
			width: 100%;
		}
    &__footer {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      background-color: $color-darkest;
      box-sizing: border-box;
    }
    &__date {
			font-size: 16px;
			text-align: right;
    }
  }


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


  @media screen and (max-width: 767px) {
    .article {

      &__image {
        height: 200px;
      }
      &__text,
      &__footer {
        padding: 8px;
      }
      &__date {
        padding: 8px 4px;
      }
      &__button {
        font-size: 14px;
      }
    }
  }
</style>

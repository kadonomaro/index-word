<template>
  <div class="editable-articles">
    <app-button
      class="editable-articles__button"
      @click-handler="$router.push({ name: 'new-article' })"
      :text="'New'"
    />
    <div class="editable-articles__list">
      <article-item
        class="editable-articles__item"
        v-for="article in allArticles"
        :key="article.id"
        :article="article"
        @modal="openModal"
      />
    </div>

    <modal
      v-show="isModalVisible"
      @close="closeModal"
      @action="deleteArticle"
    >
      <template v-slot:header>
        <span>Delete Article</span>
      </template>
      <template v-slot:body>
        <span>You really want to delete the article, this action cannot be undone.</span>
      </template>
    </modal>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ArticleItem from '@/components/admin/ArticleItem.vue';
import AppButton from '@/components/blocks/AppButton.vue';
import Modal from '@/components/blocks/Modal.vue';

export default {
  name: 'ArticleEdit',
  components: {
    ArticleItem,
    AppButton,
    Modal
  },
  data() {
    return {
      isModalVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'allArticles'
    ])
  },
  methods: {
    openModal(id) {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    deleteArticle(id) {
      console.log('object');
    }
  }

}
</script>

<style lang="scss">
  .editable-articles {
    &__button {
      margin-bottom: 20px;
    }
    &__item {
      margin-bottom: 20px;
    }
  }
</style>

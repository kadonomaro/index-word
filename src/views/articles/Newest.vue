<template>
  <div class="newest-articles">
    <h2>Новые статьи</h2>
    <app-articles
      v-if="newestArticles.length > 0"
      :articles="items"
    />
    <app-empty-article v-else />
    <paginate
      v-model="page"
      :page-count="pageCount"
      :click-handler="pageChangeHandler"
      :prev-text="'Назад'"
      :next-text="'Вперед'"
      :container-class="'paginate'">
    </paginate>
  </div>
</template>

<script>

import AppArticles from '@/components/Articles.vue';
import AppEmptyArticle from '@/components/EmptyArticle.vue';
import { mapGetters } from 'vuex';
import paginationMixin from '@/mixins/pagination.mixin';

export default {
  name: 'newest-articles',
  mixins: [paginationMixin],
  components: {
    AppArticles,
    AppEmptyArticle
  },
  mounted(){
    setTimeout(() => {
    this.setupPagination(this.newestArticles)
    }, 1000);
  },
  computed: {
    ...mapGetters([
      'newestArticles'
    ])
  }
};
</script>

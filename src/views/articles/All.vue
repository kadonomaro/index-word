<template>
  <div class="all-articles">
    <h2>Все статьи</h2>
    <app-articles :articles="items" />
    <paginate
      v-if="allArticles.length > pageSize"
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
import { mapGetters } from 'vuex';
import paginationMixin from '@/mixins/pagination.mixin';

export default {
  name: 'all-articles',
  mixins: [paginationMixin],
  components: {
    AppArticles,
  },
  mounted(){
    setTimeout(() => {
      this.setupPagination(this.allArticles)
    }, 1000);
  },
  computed: {
    ...mapGetters([
      'allArticles'
    ])
  },
};
</script>

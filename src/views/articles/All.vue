<template>
  <div class="all-articles">
    <h2>Все статьи</h2>
    <app-articles :articles="allArticles" />
    <paginate
      :page-count="20"
      :click-handler="pageClickHandler"
      :prev-text="'Назад'"
      :next-text="'Вперед'"
      :container-class="'paginate'">
    </paginate>
  </div>
</template>

<script>

import AppArticles from '@/components/Articles.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'all-articles',
  components: {
    AppArticles,
  },
  computed: {
    ...mapGetters([
      'allArticles'
    ])
  },
  methods: {
    pageClickHandler() {

    }
  }
};
</script>

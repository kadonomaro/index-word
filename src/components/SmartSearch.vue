<template>
  <div class="search">
    <form class="search__form">
      <input
        type="text"
        class="search__field"
        @input="searchItems"
        v-model="searchValue"
      >
    </form>
    <ul class="search__dropdown search-dropdown">
      <li class="search-dropdown__item" v-for="(val, index) in filteredValues" :key="index">
        <span class="search-dropdown__title">{{ val.title }}</span>
        <app-button @click-handler="$router.push({ name: 'article-detail', params: {id: val.id} })" :text="'Перейти'" />
      </li>
    </ul>
  </div>
</template>

<script>
import AppButton from '@/components/blocks/AppButton.vue';

export default {
  name: 'SmartSearch',
  components: {
    AppButton
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchValue: '',
      filteredValues: []
    }
  },
  computed: {

  },
  methods: {
    searchItems() {
      this.filteredValues.length = 0;
      this.list.forEach((item) => {
        if(item.title.toLowerCase().includes(this.searchValue.toLowerCase()) && this.searchValue) {
          this.filteredValues.push({
            id: item.id,
            title: item.title
          });
        }
      });
    }
  }
}
</script>

<style lang="scss">
  .search {

  }
</style>

<template>
  <div class="search">
    <form class="search__form">
      <input
        type="text"
        class="search__field"
        @input="searchItems"
        v-model="searchValue"
        placeholder="Название статьи"
      >
    </form>
    <div class="search-dropdown" v-if="filteredValues.length">
      <ul class="search-dropdown__list">
        <li class="search-dropdown__item" v-for="(val, index) in filteredValues" :key="index">
          <button class="search-dropdown__button" @click="clickHandler(val.id)">{{ val.title }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartSearch',
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
    },
    clickHandler(id) {
      if (this.$route.params.id !== id) {
        this.$router.push({ name: 'article-detail', params: {id} })
      }
    }
  }
}
</script>

<style lang="scss">
  .search {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding: 15px 10px;
    background-color: #ffffff;
    &__field {
      width: 100%;
      padding: 5px 10px;
      font-size: 16px;
      border: 2px solid #303030;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }

  .search-dropdown {
    position: absolute;
    z-index: 99;
    left: 10px;
    right: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
    box-sizing: border-box;
    overflow: hidden;
    &__list {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    &__item {
      &:not(:last-child) {
        border-bottom: 2px solid #cccccc;
      }
    }
    &__button {
      width: 100%;
      padding: 8px 12px;
      font-size: inherit;
      text-align: left;
      background-color: #ffffff;
      border: none;
      transition: background-color 0.2s ease-in;
      cursor: pointer;
      &:hover,
      &:focus {
        background-color: #eaebed;
      }
    }
  }
</style>

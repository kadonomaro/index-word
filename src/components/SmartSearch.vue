<template>
  <div class="search" @keydown.esc="isOpen = false">
    <form class="search__form">
      <label class="search__label">
        <input
          type="text"
          class="search__field"
          @focus="searchValue ? isOpen = true : isOpen = false"
          @input="searchItems"
          v-model="searchValue"
          placeholder="Название статьи"
        >
      </label>
      <button v-if="searchValue" class="search__button" aria-label="close" @click.prevent="[isOpen = false, searchValue = '']"></button>
    </form>
    <div class="search-dropdown" v-if="isOpen">
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
      filteredValues: [],
      isOpen: false
    }
  },
  computed: {

  },
  methods: {
    searchItems() {
      this.isOpen = true;
      this.filteredValues.length = 0;
      this.list.forEach((item) => {
        if(item.title.toLowerCase().includes(this.searchValue.toLowerCase()) && this.searchValue && this.isOpen) {
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
    &__label {
      position: relative;
    }
    &__field {
      width: 100%;
      padding: 7px 40px 7px 7px;
      font-size: 16px;
      border: 2px solid #909090;
      border-radius: 5px;
      box-sizing: border-box;
      transition: border-color 0.2s ease;
      outline: none;
      &:hover,
      &:focus {
        border-color: #303030;
      }
    }
    &__button {
      position: absolute;
      top: 50%;
      right: 20px;
      width: 25px;
      height: 25px;
      padding: 0;
      background-color: transparent;
      background-image: url('~@/assets/close.svg');
      background-position: center;
      background-size: 13px;
      background-repeat: no-repeat;
      border: 2px solid #909090;
      border-radius: 50%;
      transform: translate(0, -50%);
      transition: background-color 0.2s ease-in, border-color 0.2s ease-in;
      cursor: pointer;
      outline: none;
      &:hover,
      &:focus {
        background-color: #eaebed;
        border-color: #303030;
      }
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
        border-bottom: 2px solid #eaebed;
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
      outline: none;
      &:hover,
      &:focus {
        background-color: #eaebed;
      }
    }
  }
</style>

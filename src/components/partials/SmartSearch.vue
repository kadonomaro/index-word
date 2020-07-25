<template>
  <div class="search" v-escape="close">
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
				this.$router.push({ name: 'article-detail', params: {id} });
				this.close();
				this.clear();
      }
    },
    close() {
      this.isOpen = false;
		},
		clear() {
			this.searchValue = '';
		}
  }

}
</script>

<style lang="scss">
  .search {
    position: relative;
		max-width: 900px;
    &__label {
      position: relative;
    }
    &__field {
      width: 100%;
			padding: 7px 40px 7px 7px;
			color: inherit;
      font-size: 16px;
      border: 2px solid $color-medium-gray;
			border-radius: 5px;
			background-color: transparent;
      box-sizing: border-box;
      transition: border-color 0.2s ease;
			outline: none;
			&::placeholder {
				color: inherit;
			}
      &:hover,
      &:focus {
        border-color: $color-accent;
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
    max-height: 360px;
    background-color: #ffffff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
    box-sizing: border-box;
    overflow: auto;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #909090;
      border-radius: 2px;
    }​
    &::-webkit-scrollbar-track-piece {
      background-color: #eaebed;
    }
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


  @media screen and (max-width: 767px) {
    .search {
      &__field {
        padding: 10px 55px 10px 10px;
      }
      &__button {
				right: 10px;
        width: 30px;
        height: 30px;
        background-size: 15px;
      }
    }
    .search-dropdown {
			left: 5px;
			right: 5px;
      &__button {
        padding: 6px 10px;
      }
    }
  }
</style>

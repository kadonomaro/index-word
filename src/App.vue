<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch('getArticles');
      this.$store.dispatch('getSettings');
    }
  }
}
</script>

<style lang="scss">
img {
  display: block;
  max-width: 100%;
}
.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 10px;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.paginate {
  display: flex;
  justify-content: center;
  padding: 0;
  font-size: 18px;
  list-style: none;
  li {
    color: #ffffff;
    background-color: $color-dark-gray;
    border-radius: 3px;
    transition: background-color 0.2s ease-in;
		&:not(:last-child) {
			margin-right: 3px;
		}
    &:hover,
    &:focus {
      background-color: darken($color: $color-accent, $amount: 10%);
    }
  }
  li.active {
		color: $color-text;
		background-color: $color-accent;
  }
  a {
    display: block;
    padding: 4px 12px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-in;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}


@media screen and (max-width: 1024px) {
  .paginate {
    font-size: 18px;
    a {
      padding: 10px 16px;
    }
  }
}
</style>

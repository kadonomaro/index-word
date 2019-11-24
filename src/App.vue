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
  color: #303030;
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
  font-size: 24px;
  list-style: none;
  li {
    margin-right: 3px;
    color: #ffffff;
    background-color: #5cb8c9;
    border-radius: 5px;
    transition: background-color 0.2s ease-in;
    &:hover,
    &:focus {
      background-color: darken($color: #5cb8c9, $amount: 10%);
    }
  }
  li.active {
    background-color: darken($color: #5cb8c9, $amount: 20%);
  }
  a {
    display: block;
    padding: 4px 12px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}


@media screen and (max-width: 767px) {
  .paginate {
    font-size: 16px;
    a {
      padding: 4px 8px;
    }
  }
}
</style>

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>

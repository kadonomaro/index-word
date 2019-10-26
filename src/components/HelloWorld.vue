<template>
  <div class="hello">
    <div class="article" v-for="(article, index) in articles" :key="index">
      <h2>{{ article.title }}</h2>
      <p>{{ article.text }}</p>
    </div>

  </div>
</template>

<script>
import db from '@/main';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {

  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      db.collection('articles')
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.articles.push(doc.data());
          });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

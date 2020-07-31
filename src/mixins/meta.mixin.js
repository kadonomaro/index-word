export default {
	mounted() {
		if (this.article) {
      this.setPageTitle(this.article.title);
    }
	},
  methods: {
    setPageTitle(title) {
			document.title = title + " – Index Word";
		}
  },
  watch: {
    article(loaded) {
      this.setPageTitle(loaded.title)
    }
  }
};

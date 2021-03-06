import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      page: +this.$route.query.page || 1,
      pageSize: 8,
      pageRange: 1,
      pageCount: 0,
      allItems: [],
      items: []
    };
  },
	mounted() {
		this.pageSize = this.getPageSize
	},
	computed: {
		...mapGetters([
			'getSettings'
		]),
		getPageSize() {
			return this.getSettings.paginationPageSize
		}
	},
  methods: {
    pageChangeHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`);
      this.items = this.allItems[page - 1] || this.allItems[0];
    },
    setupPagination(allItems) {
      this.allItems = allItems.chunk(this.pageSize);
      this.pageCount = this.allItems.length;
      this.items = this.allItems[this.page - 1] || this.allItems[0];
    }
  }
};


Array.prototype.chunk = function (size) {
  const temp = [];
  for (let i = 0; i < this.length; i+=size) {
    temp.push(this.slice(i, i + size));
  }
  return temp;
};

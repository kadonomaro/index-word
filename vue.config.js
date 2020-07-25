module.exports = {
  runtimeCompiler: true,
  outputDir: 'dist',

  css: {
		modules: true,
		loaderOptions: {
			sass: {
					prependData: `
							@import "@/assets/css/variables.scss";
					`
			}
		}
	},

  // publicPath: process.env.NODE_ENV === 'production' ? '/index-word/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  lintOnSave: false
}

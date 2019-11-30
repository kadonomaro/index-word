module.exports = {
  runtimeCompiler: true,
  outputDir: 'dist',

  css: {
    modules: true
  },

  // publicPath: process.env.NODE_ENV === 'production' ? '/index-word/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  lintOnSave: false
}

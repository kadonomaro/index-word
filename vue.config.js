module.exports = {
  runtimeCompiler: true,
  outputDir: 'docs',

  css: {
    modules: true
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/index-word/' : '/',
  lintOnSave: false
}

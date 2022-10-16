module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        // compilerOptions: {
        //   // treat any tag that starts with number as custom elements
        //   isCustomElement: tag => tag.startsWith('number')
        // }
      }))
  }
}
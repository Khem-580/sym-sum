module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
}
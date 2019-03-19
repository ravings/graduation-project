module.exports = {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '/api':''
      }
    }
  }
  // devServe: {
  //   open: true,
  //   assetsPublicPath: '/',
  //   host: 'localhost',
  //   port: 8080,
  //   https: false,
  //   hotOnly: false,
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '/api':''
  //       }
  //     }
  //   }
  // }
}

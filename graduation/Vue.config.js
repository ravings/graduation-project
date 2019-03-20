// const path = require('path');
module.exports = {
  publicPath: '/' ,// 根域上下文目录
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  devServer: {
    open: false,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,   //是否跨域
        pathRewrite: {
          // '^/api':''
        }
      }
    },
    before: app => {}
  }
}

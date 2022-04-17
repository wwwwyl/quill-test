const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 10408,
    // 配置代理
    proxy: {
      '/api':{ 
        target: 'http://127.0.0.1:8000/',
        changeOrigin: true, 
        ws: true, 
        pathRewrite: {
          '^/api': '/api' 
        }
      }
    }
  },
})

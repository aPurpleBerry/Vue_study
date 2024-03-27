const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 开启代理服务器 方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 方式二 
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/atguigui' : ''},
        // 如果不加上一行，atguigu就会把atguigu发送到服务器去

        ws: true, // 用于支持websocket
        changeOrigin: true //用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/demo' : ''},
       
        // 如果不写下面两行也会默认为 true
        // ws: true,
        // changeOrigin: true 
      },
    }
  }
})

module.exports = {
  publicPath: './',
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map'
  },
//   devServer: {
//   // 设置代理
//   proxy: {
//    "https://10.80.232.55:4432": {
//     target: "http://10.80.232.55:8092", // 域名
//     ws: true, // 是否启用websockets
//     changOrigin: true //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
//     }
//   }
//  }
}

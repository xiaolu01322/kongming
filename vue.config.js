var config = require("./config");

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        //这里最好有一个 /
        target: config.isDebugger ? config.dev : config.prod, // 服务器端接口地址
        ws: true, //如果要代理 websockets，配置这个参数
        // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  }
};

module.exports = {
  port: 1234,
  proxy: {
    '/': {
      target:"http://localhost:10881",
      // changeOrigin:true,
      // ws:true,
      // pathRewrite:{
      //   "/service/nacos": "/nacos"
      // },
    },
  }
}
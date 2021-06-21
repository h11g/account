module.exports = {
  // 接口代理1
  proxy: {
    '/mymoney': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
    },
  },
}

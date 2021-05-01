/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { SERVER_HOST, SERVER_PORT } = require('../contanst')

module.exports = merge(common, {
  mode: 'development',
  // 查看 source map，不能用于线上环境
  devtool: 'eval-source-map',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    host: SERVER_HOST,
    port: SERVER_PORT,
    hot: true, // 热更新
    hotOnly: true,
    compress: true, // 是否启用 gzip 压缩
    open: true,
    // clientLogLevel: 'warning', // 日志等级
    // stats: 'errors-only' // 终端仅打印 error
  },
})

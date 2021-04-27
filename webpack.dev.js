const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  // 查看 source map，不能用于线上环境
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    hot: true, // 热更新
    hotOnly: true,
    compress: true, // 是否启用 gzip 压缩
    port: 3000,
    open: true
    // clientLogLevel: 'warning', // 日志等级
    // stats: 'errors-only' // 终端仅打印 error
  }
})

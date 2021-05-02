/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const { resolve } = require('path')
const { PROJECT_PATH } = require('../contanst')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
    }),
  ],
})

/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const WebpackBar = require('webpackbar')
const { PROJECT_PATH, isDev } = require('../contanst')

const getCssLoaders = (importLoaders) =>
  [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: isDev,
        importLoaders,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            'postcss-flexbugs-fixes',
            [
              'postcss-preset-env',
              {
                autoprefixer: {
                  grid: true,
                  flexbox: 'no-2009',
                },
                stage: 3,
              },
            ],
            'postcss-normalize',
          ],
        },
      },
    },
  ].filter(Boolean)

module.exports = {
  entry: {
    app: resolve(PROJECT_PATH, './src/index.tsx'),
  },
  output: {
    filename: `[name]${isDev ? '' : '.[contenthash]'}.bundle.js`,
    path: resolve(PROJECT_PATH, './dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      src: resolve(PROJECT_PATH, './src'),
      common: resolve(PROJECT_PATH, './src/common'),
      public: resolve(PROJECT_PATH, './public'),
      css: resolve(PROJECT_PATH, './src/css'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: resolve(PROJECT_PATH, 'src'),
        use: getCssLoaders(1),
      },
      {
        test: /\.scss$/i,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
              sassOptions: {
                // 禁用 fiber, https://webpack.js.org/loaders/sass-loader/
                fiber: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif|bmp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/images',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: resolve(PROJECT_PATH, './public'),
          from: '*',
          to: resolve(PROJECT_PATH, './dist'),
          toType: 'dir',
        },
      ],
    }),
    !isDev &&
      new MiniCssExtractPlugin({
        filename: `[name]${isDev ? '' : '.[contenthash]'}.css`,
      }),
    new HtmlWebpackPlugin(),
    new WebpackBar({
      name: isDev ? '正在启动' : '正在打包',
      color: '#fa8c16',
    }),
  ].filter(Boolean),
  optimization: {
    moduleIds: 'deterministic',
    minimizer: [
      /**
       * 需要使用 `...` 来扩展已经存在的 minimizers,否则比如会导致 js 压缩失效
       * @see https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
       */
      `...`,
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single',
  },
}

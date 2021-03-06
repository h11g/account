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
            'tailwindcss',
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
      svg: resolve(PROJECT_PATH, './src/svg'),
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
                // ?????? fiber, https://webpack.js.org/loaders/sass-loader/
                fiber: false,
              },
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDev,
              lessOptions: {
                // Deprecated????????? antd ????????????????????????
                javascriptEnabled: true,
                modifyVars: {
                  'primary-color': '#BE8E62',
                  'link-color': '#BE8E62',
                  'heading-color': '#A79E9F',
                  'text-color': '#A79E9F',
                  'text-color-secondary': '#C9C4CA',
                  'border-color-base': '#C7AD94',
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|bmp)$/,
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
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
              expandProps: 'start',
              svgProps: {
                fill: 'currentColor',
                className: "{(props.className || '')}",
              },
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
      name: isDev ? '????????????' : '????????????',
      color: '#fa8c16',
    }),
  ].filter(Boolean),
  optimization: {
    moduleIds: 'deterministic',
    minimizer: [
      /**
       * ???????????? `...` ???????????????????????? minimizers,????????????????????? js ????????????
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
  performance: {
    maxEntrypointSize: 800000,
    maxAssetSize: 800000,
  },
}

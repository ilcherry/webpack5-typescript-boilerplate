const path = require('path');
const esbuild = require('esbuild');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = dir => path.resolve(__dirname, '..', dir);

const { NODE_ENV } = process.env;

const isDev = NODE_ENV === 'development';

const config = {
  target: 'web',
  mode: NODE_ENV,
  entry: ['./src/index.js'],
  output: {
    path: resolve('dist'),
    filename: 'js/[name].js',
  },
  resolve: {
    alias: {
      actions: resolve('src/actions'),
      assets: resolve('src/assets'),
      components: resolve('src/components'),
      constants: resolve('src/constants'),
      hooks: resolve('src/hooks'),
      layouts: resolve('src/layouts'),
      pages: resolve('src/pages'),
      reducers: resolve('src/reducers'),
      routes: resolve('src/routes'),
      sagas: resolve('src/sagas'),
      styles: resolve('src/styles'),
      utils: resolve('src/utils'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        include: resolve('src'),
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015',
              implementation: esbuild,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                /*
                  enables CSS modules or interoperable CSS format,
                  for all files which satisfy /\.module(s)?\.\w+$/i.test(filename) condition

                  detail visit: https://github.com/webpack-contrib/css-loader#auto
                */
                auto: true,
              },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack5-boilerplate',
      template: resolve('public/index.html'),
    }),

    !isDev &&
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),

    new WebpackBar({ name: isDev ? 'development' : 'production' }),
  ].filter(Boolean),
};

module.exports = config;

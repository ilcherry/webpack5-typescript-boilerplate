const path = require('path');
const { merge } = require('webpack-merge');
const MockWebpackPlugin = require('mock-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { ESBuildPlugin } = require('esbuild-loader');
const baseConf = require('./base.config');
const mockConfig = require('../mock');

const resolve = dir => path.resolve(__dirname, '..', dir);

const config = {
  devServer: {
    port: 3001,
    hot: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' },
      },
    },
    overlay: true,
  },
  stats: 'errors-only',
  devtool: 'cheap-module-source-map',
  cache: {
    type: 'filesystem',
    // 指定缓存位置
    cacheLocation: path.resolve(__dirname, '.appcache'),
    buildDependencies: {
      config: [__filename],
    },
  },
  plugins: [
    // 启用构建缓存
    new ESBuildPlugin(),
    new ESLintPlugin({
      extensions: ['.ts', '.tsx'],
    }),
    new FaviconsWebpackPlugin(resolve('public/favicon.ico')),
    new MockWebpackPlugin({
      config: mockConfig,
      port: 5000,
    }),
  ],
};

module.exports = merge(baseConf, config);

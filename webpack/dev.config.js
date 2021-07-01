const path = require('path');
const { merge } = require('webpack-merge');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
// TODO: Temporarily disabled
// const ESLintPlugin = require('eslint-webpack-plugin');
const { ESBuildPlugin } = require('esbuild-loader');
const webpackMockServer = require('webpack-mock-server');
const baseConf = require('./base.config');

const resolve = dir => path.resolve(__dirname, '..', dir);

const config = {
  devServer: {
    port: 3001,
    hot: true,
    compress: true,
    historyApiFallback: true,
    before: app =>
      webpackMockServer.use(app, {
        // MockServerOptions here
        verbose: false,
        logRequests: true,
        logResponses: true,
        entry: [
          // exact fileNames are expected (no wildcard or folder - use custom tsConfig instead)
          'mock/index.mock.ts',
        ],
        strictCompilerOptions: {
          // these options impossible to override
          noEmit: true,
          noEmitHelpers: true,
          esModuleInterop: true,
          declaration: false,
        },
      }),
    proxy: {
      '/api': {
        target: 'http://localhost:8079',
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
    // new ESLintPlugin({
    //   extensions: ['.ts', '.tsx'],
    // }),
    new FaviconsWebpackPlugin(resolve('public/favicon.ico')),
  ],
};

module.exports = merge(baseConf, config);

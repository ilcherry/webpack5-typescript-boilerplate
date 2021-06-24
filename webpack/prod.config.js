const path = require('path');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const baseConf = require('./base.config');

const resolve = dir => path.resolve(__dirname, '..', dir);

const config = {
  // webpack5默认会进行 tree-shaking
  devtool: false,
  performance: {
    hints: false,
  },
  optimization: {
    // 在生产模式下是默认启用的，它可以对模块中的标志进行分析，找出导出和引用之间的依赖关系。
    innerGraph: true,
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
        minifyWhitespace: true,
      }),
    ],
    splitChunks: {
      chunks: 'async', // 只对异步加载的模块进行处理
      minSize: {
        javascript: 30000, // 模块要大于30kb才会进行提取
        style: 50000, // 模块要大于50kb才会进行提取
      },
      minRemainingSize: 0, // 代码分割后，文件size必须大于该值    （v5 新增）
      maxSize: 0,
      minChunks: 1, // 被提取的模块必须被引用1次
      maxAsyncRequests: 6, // 异步加载代码时同时进行的最大请求数不得超过6个
      maxInitialRequests: 4, // 入口文件加载时最大同时请求数不得超过4个
      automaticNameDelimiter: '~', // 模块文件名称前缀
      cacheGroups: {
        // 分组，可继承或覆盖外层配置
        // 将来自node_modules的模块提取到一个公共文件中 （又v4的vendors改名而来）
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        // 其他不是node_modules中的模块，如果有被引用不少于2次，那么也提取出来
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: resolve('public/favicon.ico'), to: resolve('dist') }],
    }),
  ],
};

module.exports = merge(baseConf, config);

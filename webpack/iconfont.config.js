const path = require('path');
const WebpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs');

const resolve = dir => path.resolve(__dirname, '..', dir);

const options = {
  fontName: 'if',
  cssPrefix: 'if',
  svgs: resolve('src/assets/icons/**/*.svg'),
  fontsOutput: resolve('src/assets/fonts'),
  cssOutput: resolve('src/assets/fonts/font.css'),
  htmlOutput: resolve('src/assets/fonts/index.html'),
  // formats: ['ttf', 'woff', 'svg'],
};

new WebpackIconfontPluginNodejs(options).build();

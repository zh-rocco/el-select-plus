const { name } = require('./package.json');
const BUILD_TYPE = process.env.BUILD_TYPE;

module.exports = {
  baseUrl: BUILD_TYPE === 'example' ? `/${name}/` : './',
  outputDir: BUILD_TYPE === 'library' ? 'dist' : 'docs',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'src/index.html',
      filename: 'index.html',
    },
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'element-ui': 'ELEMENT',
    },
  },
};

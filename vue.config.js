const { name } = require('./package.json');

module.exports = {
  baseUrl: `/${name}/`,
  outputDir: 'docs',
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

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: `!!raw-loader!${path.join(process.cwd(), 'src/index.template.ejs')}`,
  filename: path.resolve(__dirname, 'views/index.ejs'),
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
  },
});

const config = {
  // Tell webpack the root file of our
  // server application
  entry: {
    bundle: './src/client/client.tsx',
  },

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },

  plugins: [
    htmlPlugin,
  ],
};

const extractBundles = bundles => ({
  plugins: bundles.map(bundle => (
    new webpack.optimize.CommonsChunkPlugin(bundle)
  )),
});

module.exports = merge(baseConfig, config, extractBundles([
  {
    name: 'vendor',
    minChunks: ({ resource }) => (
      resource &&
      resource.indexOf('node_modules') >= 0 &&
      resource.match(/\.js$/)
    ),
  },
]));

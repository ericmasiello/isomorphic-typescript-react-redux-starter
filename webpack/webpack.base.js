const path = require('path');
const merge = require('webpack-merge');
const parts = require('./parts');

const PATHS = {
  src: path.join(__dirname, '/../src'),
};

module.exports = merge({
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
      },
      {
        test: /\.tsx?$/,
        include: [PATHS.src],
        use: 'awesome-typescript-loader',
      },
    ]
  }
}, parts.loadImages({
  options: {
    limit: 8192,
  }
}));

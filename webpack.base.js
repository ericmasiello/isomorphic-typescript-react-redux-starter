const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = {
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
        include: [PATHS.src],
        use: 'awesome-typescript-loader',
      },
    ]
  }
};

const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [PATHS.src],
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      },
      {
        test: /\.tsx?$/,
        include: [PATHS.src],
        use: 'awesome-typescript-loader',
      },
    ]
  }
};

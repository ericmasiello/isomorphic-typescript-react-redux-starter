const parts = {
  loadImages({ include, exclude, options } = {}) {
    return ({
      module: {
        rules: [{
          test: /\.(gif|png|jpe?g|svg)$/i,
          include,
          exclude,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options,
            },
          ],
        }],
      },
    });
  }
};

module.exports = parts;

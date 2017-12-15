const parts = {
  loadImages({ include, exclude, options } = {}) {
    return ({
      module: {
        rules: [{
          test: /\.(png|jpg|jpeg|svg)$/,
          include,
          exclude,
          use: [{
              loader: 'url-loader',
              options,
            }]
        }],
      },
    });
  }
};

module.exports = parts;

const parts = {
  loadImages({ include, exclude, options } = {}) {
    return ({
      module: {
        rules: [/*{
          test: /\.(png|jpg|jpeg|svg)$/,
          include,
          exclude,
          use: [{
              loader: 'url-loader',
              options,
            }]
        }, */{
          test: /\.(gif|png|jpe?g|svg)$/i,
          include,
          exclude,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
              },
            },
          ],
        }],
      },
    });
  }
};

module.exports = parts;

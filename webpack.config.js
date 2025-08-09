const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.normalize(`${__dirname}/src/index.js`),
  output: {
    path: path.normalize(`${__dirname}/dist`),
    publicPath: '/',
    filename: 'index.min.js',
    library: 'CodeBox',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

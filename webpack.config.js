const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // path: __dirname + '/dist',
    // filename: 'bundle.js',
    // publicPath: '/'
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development'
}
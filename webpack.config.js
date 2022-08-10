const path = require('path');

module.exports = {
  entry: './src/operator_take_until.js',
  output: {
    // path: __dirname + '/dist',
    // filename: 'bundle.js',
    // publicPath: '/'
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development'
}
var path = require('path');

module.exports = {
  entry: {
    'bundle': './src/zap-hello.js',
    'hello-bundle': './src/hello-world.js'
  },
  devtool: 'source-map',
  output: {
    filename: './src/[name].js'
  },
  module: {
  }
}

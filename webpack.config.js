var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
      extensions: ['', '.js', '.json', 'coffee']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
      include: path.join(__dirname, '.')
    },
    {
      test: /\.json/,
      loader: 'json-loader',
      include: path.join(__dirname, '.')
    },
    {
      test: /\.css/,
      loaders:['style','css'],
      include: path.join(__dirname, '.')
      // loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"}),
      // exclude: /node_modules/
    }]
  }
};

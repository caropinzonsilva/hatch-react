const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const env = require('../env/development.js');

const envVars = ((env) => {
  const keys = Object.keys(env);
  keys.forEach(k => env[k] = JSON.stringify(process.env[k] || env[k]));
  return env;
})(env);

module.exports = {
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ...envVars
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: '3000'
  },
  devtool: 'cheap-eval-source-map'
};

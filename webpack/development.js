const webpack = require('webpack');
const path = require('path');
const parseArgs = require('minimist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = parseArgs(process.argv.slice(2)).env;

module.exports = {
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
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

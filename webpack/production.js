const webpack = require('webpack');
const parseArgs = require('minimist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = parseArgs(process.argv.slice(2)).env;

module.exports = {
  output: {
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        screw_ie8: true
      },
      compress: {
        screw_ie8: true
      }
    })
  ]
};

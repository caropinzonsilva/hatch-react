const webpack = require('webpack');
const parseArgs = require('minimist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = parseArgs(process.argv.slice(2)).env;

const env = (() => {
  switch (ENV) {
    case 'production':
      return require('../env/production.js');
    case 'staging':
      return require('../env/staging.js');
    default:
      return require('../env/staging.js');
  }
})();

const envVars = (env => {
  const keys = Object.keys(env);
  keys.forEach(k => (env[k] = JSON.stringify(process.env[k] || env[k])));
  return env;
})(env);

module.exports = {
  output: {
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ...envVars
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

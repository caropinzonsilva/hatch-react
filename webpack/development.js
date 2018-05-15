const webpack = require('webpack');
const path = require('path');
const env = require('../env/development.js');

const envVars = ((env) => {
  const keys = Object.keys(env);
  keys.forEach((k) => (env[k] = JSON.stringify(process.env[k] || env[k])));
  return env;
})(env);

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ...envVars,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-eval-source-map',
};

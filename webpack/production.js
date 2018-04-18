const webpack = require('webpack');
const argv = require('minimist');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ENV = argv(process.argv.slice(2)).env;
const customEnv = argv(process.argv.slice(3)); // ref https://github.com/webpack/webpack/issues/2254
const analyze = customEnv.env && customEnv.env.analyze;

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

const envVars = ((env) => {
  const keys = Object.keys(env);
  keys.forEach((k) => (env[k] = JSON.stringify(process.env[k] || env[k])));
  return env;
})(env);

const bundleAnalyzer = analyze ? [new BundleAnalyzerPlugin()] : [];

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ...envVars,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    ...bundleAnalyzer,
  ],
};

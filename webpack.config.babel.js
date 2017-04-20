import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import styleLintPlugin from 'stylelint-webpack-plugin';
import * as configs from './webpack';

const commonConfig = {
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      use: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader'
      }, {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          includePaths: [
            path.resolve(__dirname, 'src/styles')
          ]
        }
      }]
    }]
  },
  plugins: [
    new styleLintPlugin({
      configFile: path.join(__dirname, '.stylelintrc'),
      files: '**/*.?(sa|sc|c)ss',
      context: path.join(__dirname, 'src')
    })
  ]
};

const environmentConfig = (() => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return configs.production;
    case 'staging':
      return configs.staging;
    case 'development':
    default:
      return configs.development;
  }
})();

export default merge(commonConfig, environmentConfig);

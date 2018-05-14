const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('webpack.config.js');
const compiler = webpack(webpackConfig);

module.exports = function(app) {
  app.use(webpackDevMiddleware(compiler));

  app.use(webpackHotMiddleware(compiler));
};

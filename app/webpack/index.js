const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');
const compiler = webpack(webpackConfig);

module.exports = function(app) {
  app.use(
    devMiddleware(compiler, {
      // webpack-dev-middleware options
    }),
  );

  app.use(
    hotMiddleware(compiler)
  )
};

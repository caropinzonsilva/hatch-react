const bodyParser = require('body-parser');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const methodOverride = require('method-override');
const morgan = require('morgan');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(compress());
  app.use(cookieParser());
  app.use(express.static('dist'));
  app.use(favicon('dist/favicon/favicon.ico'));
  app.use(helmet.frameguard('deny'));
  app.use(methodOverride());
  app.use(
    process.env.NODE_ENV === 'production' ? morgan('combined') : morgan('dev'),
  );
};

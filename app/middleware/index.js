const bodyParser = require('body-parser');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const methodOverride = require('method-override');
const morgan = require('morgan');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

module.exports = function(app) {
  // force ssl in production
  // if (NODE_ENV === 'production') {
  //   app.use((req, res, next) => {
  //     if (req.headers['x-forwarded-proto'] !== 'https') {
  //       return res.redirect(301, `https://${req.get('Host')}${req.url}`);
  //     }
  //     return next();
  //   });
  // }

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(compress());
  app.use(cookieParser());
  app.use(
    express.static(path.join(__dirname, '../../dist'), {
      index: false,
    }),
  );
  if (NODE_ENV === 'production') {
    app.use(favicon(path.join(__dirname, '../../dist/favicon/favicon.ico')));
  }
  app.use(helmet.frameguard('deny'));
  app.use(methodOverride());
  app.use(NODE_ENV === 'production' ? morgan('combined') : morgan('dev'));
};

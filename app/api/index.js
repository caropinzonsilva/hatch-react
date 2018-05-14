const router = require('express').Router();

module.exports = function(app) {
  app.use('/api', router);

  require('app/api/root.js')(router);
  require('app/api/ping.js')(router);
};

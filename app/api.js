const router = require('express').Router();

module.exports = function(app) {
  app.use('/api', router);

  router.get('/', (req, res) => {
    res.json({});
  });

  router.get('/ping', (req, res) => {
    res.json({
      data: {
        message: 'pong',
      },
    });
  });
};

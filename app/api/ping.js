module.exports = function(router) {
  router.get('/ping', (req, res) => {
    res.json({
      data: {
        message: 'pong',
      },
    });
  });
};

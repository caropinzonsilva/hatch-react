const path = require('path');

module.exports = function(app, router) {
  require('app/api.js')(app, router);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
};

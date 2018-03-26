const path = require('path');

module.exports = function(app) {
  require('app/sitemap.js')(app);
  require('app/api.js')(app);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
};

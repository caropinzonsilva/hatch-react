const sm = require('sitemap');

module.exports = function(app) {
  const sitemap = sm.createSitemap({
    hostname: 'https://hatch-react-production.herokuapp.com',
    cacheTime: 600000,
    urls: [
      {
        url: '/',
      },
    ],
  });

  app.get('/sitemap.xml', function(req, res) {
    sitemap.toXML(function(err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  });
};

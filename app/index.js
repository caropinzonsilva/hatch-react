const express = require('express');
const app = express();

require('app/settings/index.js')(app);
require('app/middleware/index.js')(app);
require('app/webpack/index.js')(app);
require('app/api/index.js')(app);
require('app/sitemap/index.js')(app);
require('app/routes/index.js')(app);
require('app/server/index.js')(app);

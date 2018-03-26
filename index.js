const express = require('express');
const app = express();

require('app/settings.js')(app);
require('app/middleware.js')(app);
require('app/routes.js')(app);
require('app/server.js')(app);

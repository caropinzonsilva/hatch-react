const express = require('express');
const app = express();
const router = express.Router();

require('app/settings.js')(app);
require('app/middleware.js')(app);
require('app/routes.js')(app, router);
require('app/server.js')(app);

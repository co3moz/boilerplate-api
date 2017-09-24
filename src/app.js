const express = require('express');
const config = require('config');

const connectToDB = require('db/connection');
const modelLoader = require('db/model-loader');

const routeLoader = require('route-loader');

const log = require('log')('app', true);
const app = express();

(async function () {
  log('Starting Boilerplate API');

  await connectToDB(); // connects the mongo db
  await modelLoader(); // loads models from folder
  await routeLoader(app); // loads routes from folder

  app.listen(config.get('application.port', config.get('application.ip')));
  log('Started at %s:%s', config.get('application.ip'), config.get('application.port'))
})();
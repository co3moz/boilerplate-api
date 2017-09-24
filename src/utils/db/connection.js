const db = require('.');
const config = require('config');
const log = require('log')('db/connection', true);

module.exports = function () {
  return db.connect(config.get('database.uri'), Object.assign({ useMongoClient: true }, config.get('database.options'))).then((connection) => {
    log('connection established');
    module.exports = connection;
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
}

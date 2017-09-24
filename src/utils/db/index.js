const config = require('config');
const mongoose = require('mongoose');
const log = require('log')('db', true);

mongoose.Promise = global.Promise;

module.exports = mongoose;
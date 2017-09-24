const path = require('path');
const util = require('util');

const log = console.log;

function logGenerator(fileName, fixed) {
  if (fixed != true) {
    fileName = fileName.substring(fileName.lastIndexOf(path.sep) + 1, fileName.lastIndexOf('.js'));
  }

  return function () {
    log('[%s]', fileName, util.format(...arguments));
  }
}

module.exports = logGenerator;
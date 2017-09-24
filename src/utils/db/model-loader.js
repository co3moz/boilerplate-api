const glob = require('glob');
const path = require('path');
const log = require('log')('db/model-loader', true);

const routePath = path.resolve(__dirname, '../../../src/models');

module.exports = function () {
  return new Promise(resolve => {
    const lookingPath = path.resolve(routePath, './**/*.model.js');
    log('looking for .model.js files at ', lookingPath);

    glob(lookingPath, (err, modelLocations) => {
      for (const modelLocation of modelLocations) {
        let name = modelLocation.replace(/\\\\/g, '/');
        name = name.substring(name.lastIndexOf('/') + 1, name.lastIndexOf('.model.js'));
        log('model found: %s', name);

        require(modelLocation);
      }

      resolve();
    });
  });
}
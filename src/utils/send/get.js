const request = require('./index');

module.exports = function get(uri) {
    return request({ uri, json: true, method: 'GET' });
}
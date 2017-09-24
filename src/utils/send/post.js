const request = require('./index');

module.exports = function post(uri, body) {
    return request({ uri, json: true, method: 'POST', body });
}
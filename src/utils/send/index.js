const core_request = require('request');

module.exports = function request ({ uri, headers, json, qs, body, method } = {}) {
    return new Promise((resolve, reject) => {
        core_request({
            uri, headers, json, qs, body, method
        }, function (err, body, resp) {
            if(err) {
                reject(err);
            } else {
                resolve(resp);
            }
        })
    });
}
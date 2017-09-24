const request = require('send/request');
const get = require('send/get');
const post = require('send/post');
const createTemporary = require('./utils/create-temporary');

describe('send', function () {
    const temporaryAddress = createTemporary(5000);

    describe('#request()', function () {
        it('should work', function (done) {
            request({
                method: 'GET',
                uri: temporaryAddress,
                json: true
            }).then(function (data) {
                if (data.ok == true) {
                    done();
                } else {
                    done(new Error("Looks like service returned invalid value"));
                }
            }).catch(done);
        });
    });

    describe('#get()', function () {
        it('should work', function (done) {
            get(temporaryAddress).then(function (data) {
                if (data.ok == true) {
                    done();
                } else {
                    done(new Error("Looks like service returned invalid value"));
                }
            }).catch(done);
        });
    });

    describe('#post()', function () {
        it('should work', function (done) {
            post(temporaryAddress, { ok: "yes" }).then(function (data) {
                if (data.ok == "yes") {
                    done();
                } else {
                    done(new Error("Looks like service returned invalid value"));
                }
            }).catch(done);
        });
    });
});
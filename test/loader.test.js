const routeLoader = require('route-loader');
const createTemporary = require('./utils/create-temporary');

describe('loader', function () {
    const app = createTemporary(5000, true);

    describe('´#route-loader', function () {
        it('should work', function (done) {
            routeLoader(app).then(p => {
                done();
            }).catch(done);
        });
    });
});
const route = require('route-loader/router')();

route.get('/', async function (req, res) {
  res.send({ ok: true });
});

module.exports = route;
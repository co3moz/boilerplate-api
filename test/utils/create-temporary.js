const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

module.exports = function createTemporary(timeout, dontListen) {
    const temporary = express();
    let server;
    let port;

    if (!dontListen) {
        server = http.createServer(temporary).listen();
        port = server.address().port;
    }


    temporary.set('port', port);
    temporary.use(bodyParser.json());
    temporary.get('/users', (req, res) => {
        res.send({
            ok: true
        });
    });

    temporary.post('/users', (req, res) => {
        res.send(req.body);
    });

    if (!dontListen) {
        console.log(`Temporary created at http://127.0.0.1:${port}/users`);

        setTimeout(function () {
            console.log(`Temporary destroyed at http://127.0.0.1:${port}/users`);

            server.close();
        }, timeout);
    }

    if (dontListen) {
        return temporary;
    }
    return `http://127.0.0.1:${port}/users`;
};
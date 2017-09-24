const glob = require('glob');
const path = require('path');
const log = require('log')('route-loader', true);

const routePath = path.resolve(__dirname, '../../../src/routes');

module.exports = function (app) {
    return new Promise(resolve => {
        const lookingPath = path.resolve(routePath, './**/*.route.js');
        log('looking for .route.js files at ', lookingPath);

        glob(lookingPath, (err, matches) => {
            let routes = matches.map(fullRoute => {
                const shortRoute = fullRoute.substring(routePath.length + 1, fullRoute.lastIndexOf('.route.js')).replace(/\\\\/g, '/');
                const slashCount = shortRoute.match(/\//g);
                const isIndex = shortRoute.lastIndexOf('index') == shortRoute.length - 5;

                let mountPath = '/' + (isIndex ? shortRoute.substring(0, shortRoute.lastIndexOf('index')) : shortRoute);

                mountPath = mountPath.replace(/\$(\w+)/g, ':$1');

                return {
                    fullRoute,
                    shortRoute,
                    slashCount: slashCount ? slashCount.length : 0,
                    isIndex,
                    mountPath
                }
            }).sort((a, b) => {
                if (a.slashCount == b.slashCount) {
                    if (a.isIndex && !b.isIndex) {
                        return 1;
                    } else if (!a.isIndex && b.isIndex) {
                        return -1;
                    }

                    return -(a.shortRoute.length - b.shortRoute.length);
                }

                return -(a.slashCount - b.slashCount);
            }).map(route => {
                return {
                    fullRoute: route.fullRoute,
                    mountPath: route.mountPath,
                    shortRoute: route.shortRoute
                }
            });

            for (const route of routes) {
                let source = require(route.fullRoute);
                log('route found: %s at %s', route.mountPath, route.shortRoute);
                app.use(route.mountPath, source);
            }

            resolve();
        });
    });
}
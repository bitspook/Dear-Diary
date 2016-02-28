/* eslint-disable no-var, import/no-require, import/no-commonjs, prefer-arrow-callback */
var bundler,
    express,
    path,
    server,
    webpack,
    webpackConfig,
    webpackDevMiddleware,
    webpackHotMiddleware;

path = require('path');
webpack = require('webpack');
webpackDevMiddleware = require('webpack-dev-middleware');
webpackHotMiddleware = require('webpack-hot-middleware');
express = require('express');

webpackConfig = require('./webpack.config.dev');
bundler = webpack(webpackConfig);

server = express();

server.use(webpackDevMiddleware(bundler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    stats: {
        colors: true,
    },
}));

server.use(webpackHotMiddleware(bundler));

server.get('/', function(req, res) {
    res.sendFile(path.resolve(webpackConfig.devServer.contentBase, 'index.html'));
});

server.listen(webpackConfig.devServer.port, webpackConfig.devServer.host, function() {
    console.log('Dev server listening at port', webpackConfig.devServer.port);
});

#!/usr/bin/env node

/* eslint-disable import/no-commonjs */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require(path.resolve(__dirname, './webpack.config.dev'));
const app = express();
const bundler = webpack(webpackConfig);

app.use(webpackDevMiddleware(bundler, webpackConfig.devServer));
app.use(webpackHotMiddleware(bundler));
app.use(require('body-parser').json());

const staticAssetDirectory = path.resolve(__dirname, 'dist');

app.use('/', express.static(staticAssetDirectory));

app.post('/api/entries', (req, res) => {
    const shallFail = req.body.tags && req.body.tags.includes('fail');

    if (shallFail) {
        return res.status(400).send({status: 'Failed. Because you asked me to!'});
    }

    return res.send({status: 'Ok'});
});
app.use('*', (req, res) => res.redirect('/'));

app.listen(8000, () => console.log('Listening on localhost:8000')); // eslint-disable-line no-console

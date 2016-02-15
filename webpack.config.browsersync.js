/* global require, __dirname, module */
/* eslint-disable no-process-env, id-match, no-var, object-shorthand */

var ExtractTextPlugin,
    WriteFilePlugin,
    devServer,
    path,
    webpack;

webpack = require('webpack');
path = require('path');
ExtractTextPlugin = require('extract-text-webpack-plugin');
WriteFilePlugin = require('write-file-webpack-plugin');

// webpack-dev-server --hot
devServer = {
    contentBase: path.join(__dirname, '/src/endpoint'),
    colors: true,
    quiet: false,
    noInfo: false,
    publicPath: '/static/',
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8000,
    hot: true,
    outputPath: path.resolve(__dirname, './src/endpoint/static'),
};

module.exports = {
    devtool: 'eval-source-map',
    debug: true,
    devServer: devServer,
    context: path.join(__dirname, '/src'),
    entry: {
        app: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client',

            './app/index.tsx',
        ],
    },
    output: {
        path: devServer.outputPath,
        filename: '[name].js',
        publicPath: devServer.publicPath,
    },
    plugins: [
        new WriteFilePlugin({
            test: /\.css$/,
        }),
        new ExtractTextPlugin('app.css', {
            allChunks: true,
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'babel',
            },
            {
                test: /\.ts(x?)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                loaders: [
                    'babel',
                    'ts-loader',
                ],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css!resolve-url'),
                include: [
                    /node_modules/,
                ],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!resolve-url'),
                exclude: [
                    /node_modules/,
                ],
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass'),
                include: [
                    /no-css-modules/,
                ],
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!resolve-url!sass'),
                exclude: [
                    /no-css-modules/,
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
                ],
            },
            {
                test: /\.woff(2)?$/,
                loader: 'file?limit=10000&mimetype=application/font-woff',
            }, {
                test: /\.ttf$/,
                loader: 'file?limit=10000&mimetype=application/octet-stream',
            }, {
                test: /\.eot$/,
                loader: 'file',
            }, {
                test: /\.svg$/,
                loader: 'file?limit=10000&mimetype=image/svg+xml',
            },
        ],
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
};

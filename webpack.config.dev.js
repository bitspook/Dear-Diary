/* global require, __dirname, module */
/* eslint-disable no-process-env, id-match, no-var, object-shorthand */

var autoprefixer,
    devServer,
    path,
    webpack;

autoprefixer = require('autoprefixer');
webpack = require('webpack');
path = require('path');

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

            './app',
        ],
    },
    output: {
        path: devServer.outputPath,
        filename: '[name].js',
        publicPath: devServer.publicPath,
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    postcss: function() {
        return [
            autoprefixer,
        ];
    },
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
                test: /\.css$/,
                loaders: [
                    'style?sourceMap',
                    'css'
                ],
                include: [
                        /node_modules/,
                ],
            },
            {
                test: /\.css$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[name]___[local]___[hash:base64:5]',
                    'postcss-loader',
                    'resolve-url'
                ],
                exclude: [
                        /node_modules/,
                ],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style?sourceMap',
                    'css',
                    'postcss-loader',
                    'resolve-url',
                    'sass',
                ],
                include: [
                        /no-css-modules/,
                ],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[name]___[local]___[hash:base64:5]',
                    'postcss-loader',
                    'resolve-url',
                    'sass'],
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
    }
};

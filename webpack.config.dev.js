const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServer = {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    outputPath: path.join(__dirname, 'dist'),
    port: 8000,
    publicPath: '/'
};

module.exports = {
    context: path.join(__dirname, '/src'),
    debug: true,
    devServer,
    devtool: 'eval-source-map',
    entry: {
        app: [
            'webpack/hot/dev-server',
            './'
        ]
    },
    module: {
        loaders: [
            {
                babelrc: false,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel',
                query: {
                    presets: [
                        'react',
                        'es2015'
                    ]
                },
                test: /\.js$/
            },
            {
                loaders: [
                    'style?sourceMap',
                    'css',
                    'sass'
                ],
                test: /\.scss$/
            }
        ]
    },
    output: {
        filename: 'app.js',
        path: devServer.outputPath,
        publicPath: devServer.publicPath
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html') })
    ]
};

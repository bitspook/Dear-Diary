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
            'webpack-hot-middleware/client',
            './'
        ]
    },
    module: {
        loaders: [
            {
                include: [path.resolve(__dirname, 'src')],
                loaders: ['react-hot', 'babel'],
                test: /\.js$/
            },
            {
                loaders: [
                    'style?sourceMap',
                    'css'
                ],
                test: /\.css$/
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

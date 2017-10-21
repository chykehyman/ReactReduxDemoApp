const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './client/index.jsx',
    output: {
        path: '/',
        publicPath: '/',
        filename: 'bundle.min.js'
    },
    module: {
        rules: [{
            test: /\.(jsx)$/,
            include: [
                path.join(__dirname, '/client')
            ],
            use: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules')
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    ],
    devServer: {
        contentBase: '/',
        publicPath: '/',
        inline: true,
        port: 8000,
        historyApiFallback: true,
        hot: true
    },

    resolve: {
        extensions: ['.jsx', '.js']
    }
};
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, '/client/index.jsx')
    ],
    output: {
        path: '/',
        publicPath: '/',
        filename: 'bundle.min.js'
    },
    module: {
        rules: [{
                test: /\.(js?x)$/,
                use: ['react-hot-loader/webpack', 'babel-loader'],
                include: path.join(__dirname, 'client'),
                exclude: /(node_modules|server|.vscode)/
            },
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: 'client/index.html'
        // }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    ],
    // devServer: {
    //     // contentBase: 'src',
    //     // publicPath: '/src',
    //     // inline: true,
    //     // port: 8000,
    //     historyApiFallback: true
    //         // hot: true
    // },
    node: {
        fs: 'empty',
        net: 'empty'
    },
    resolve: {
        extensions: ['.jsx', '.js']
    }
};
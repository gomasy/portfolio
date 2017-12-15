const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [ 'babel-loader' ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            },
            {
                test: /\.(woff2?|ttf|eot|svg|ico|jpg)(\?v=[\d.]+|\?[\s\S]+)?$/,
                use: [
                    { loader: 'file-loader?name=[name].[ext]' },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin([
            path.join(__dirname, '/public/*'),
        ]),
        new HtmlWebpackPlugin({
            title: "Gomasy's portfolio",
            hash: true,
        }),
    ],
}

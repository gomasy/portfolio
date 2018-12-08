const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
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
                use: [ 'file-loader?name=[name].[ext]' ],
            },
        ],
    },
    plugins: [
        new (require('clean-webpack-plugin'))([
            path.join(__dirname, '/public/*'),
        ]),
        new (require('html-webpack-plugin'))({
            title: "Gomasy's portfolio",
            template: './src/contents/index.html',
        }),
    ],
}

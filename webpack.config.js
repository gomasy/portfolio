const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        filename: './app.js',
        path: path.join(__dirname, '/assets'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            },
            {
                test: /\.(woff2?|ttf|eot|svg|jpg|png)(\?v=[\d.]+|\?[\s\S]+)?$/,
                use: [
                    { loader: 'file-loader?name=/assets/[name].[ext]' },
                ],
            },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
        }),
    ],
}

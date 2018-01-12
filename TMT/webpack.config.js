const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = path.join(__dirname, './dist');

module.exports = {
    entry: './src/js/app.js',
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'app.bundle.js',
        path: distPath,
        publicPath: './dist/'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
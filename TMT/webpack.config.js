const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = path.join(__dirname, './dist');

module.exports = {
    entry: './src/js/app.js',
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: 'app.bundle.js',
        path: distPath,
        publicPath: './dist/'
    },
    module: {
        rules: [
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
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    }
};
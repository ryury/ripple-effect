const webpack = require('webpack')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name].bundle.css')

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        ripple: './ripple.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.(png|jpg)$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'url-loader',
                options: { limit: 10000 } // Convert images < 10k to base64 strings
            }]
        }, {
            test: /\.scss$/,
            include: path.resolve(__dirname, 'src'),
            loader: extractCSS.extract(['css-loader','sass-loader'])
        }, {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
            }]
        }]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        extractCSS
    ]
}

module.exports = config

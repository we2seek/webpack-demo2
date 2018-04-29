const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-[hash].js',
        //publicPath: 'dist/'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: 'css-loader'
                })
                // use: [
                //     'style-loader',
                //     'css-loader'
                // ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name]-[hash].css',
            allChunks: true
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '..')
        }),
        new HtmlWebpackPlugin({
            title: 'Index page'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

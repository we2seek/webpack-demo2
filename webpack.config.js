const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
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
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ]
}

module.exports = (env, options) => {
    const production = options.mode === 'production';
    // conf.devtool = production ? 'source-map' : 'eval-sourcemap';
    conf.devtool = production ? false : 'eval-sourcemap';

    return conf;
}
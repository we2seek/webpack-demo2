const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: 'dist/'
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
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css')
    ]
}

module.exports = (env, options) => {
    const production = options.mode === 'production';
    // conf.devtool = production ? 'source-map' : 'eval-sourcemap';
    conf.devtool = production ? false : 'eval-sourcemap';

    return conf;
}
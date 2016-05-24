/**
 * Created by amita on 5/18/2016.
 */
var webpack = require('webpack');

module.exports = {
    entry: './app/js/app.js',
    output: {
        filename: './dist/js/app-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                // If you're following the tutorial for the first time,
                // you will be using Babel v6 and thus you need to add this extra configuration
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
            'es6-promise': 'es6-promise'
        })
    ]
};
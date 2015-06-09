'use strict';
var webpack = require('webpack'),
path = require('path');
// PATHS
var PATHS = {
  app: __dirname + '/app',
  bower: __dirname + '/bower_components'
};
module.exports = {
    context: PATHS.app,
    entry: {
           app: ['webpack/hot/dev-server', './core/bootstrap.js']
    },
    output: {
        path: PATHS.app,
        filename: 'bundle.js'
    },
    resolve: {
        root: PATHS.app,
        extensions: ["", ".js", ".less"],
        modulesDirectories: ["app", "node_modules"],
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html?{"minimize":true,"removeRedundantAttributes":false}'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    }
};
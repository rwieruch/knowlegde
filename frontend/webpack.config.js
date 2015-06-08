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
            }
        ]
    }
};
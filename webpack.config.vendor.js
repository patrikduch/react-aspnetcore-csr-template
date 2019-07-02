const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");

// JS minification
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// Compression plugin (for GZIP)
const CompressionPlugin = require('compression-webpack-plugin');

const VENDOR_LIBS = [
  'reactstrap',
  'bootstrap/dist/css/bootstrap.min.css',
  "domain-task",
  "event-source-polyfill",
  "react",
  "react-dom",
  "react-router-dom",
  "react-redux",
  "redux",
  "redux-thunk",
  "react-router-config"
];

module.exports = env => {
  const isDevBuild = !(env && env.prod);
  const extractCSS = new ExtractTextPlugin("vendor.css");

  const sharedConfig = {
    stats: { modules: false },
    mode: isDevBuild? 'development' : 'production',
    resolve: { extensions: [".js"] },
    module: {
      rules: [
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/,
          use: "url-loader?limit=100000"
        }
      ]
    },
    entry: {
      vendor: VENDOR_LIBS
    },
    output: {
      publicPath: "dist/",
      filename: "[name].js",
      library: "[name]_[hash]"
    },
    plugins: [
      new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
      new webpack.NormalModuleReplacementPlugin(
        /\/iconv-loader$/,
        require.resolve("node-noop")
      ), // Workaround for https://github.com/andris9/encoding/issues/16
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": isDevBuild ? '"development"' : '"production"'
      })
    ]
  };

  const clientBundleConfig = merge(sharedConfig, {
    output: { path: path.join(__dirname, "wwwroot", "dist") },
    module: {
      rules: [
        {
          test: /\.css(\?|$)/,
          use: extractCSS.extract({
            use: isDevBuild ? "css-loader" : "css-loader"
          })
        }
      ]
    },
    plugins: [
      extractCSS,
      new webpack.DllPlugin({
        path: path.join(__dirname, "wwwroot", "dist", "[name]-manifest.json"),
        name: "[name]_[hash]"
      })
    ].concat(isDevBuild ? [] : [
      new UglifyJsPlugin(),
      new CompressionPlugin({
        algorithm: 'gzip'
      })
    
    ])
  });

  return [clientBundleConfig];
};

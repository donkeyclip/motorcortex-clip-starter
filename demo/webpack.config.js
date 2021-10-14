const path = require("path");
const webpack = require("webpack");

const dcPath = "https://code.donkeyclip.com";
module.exports = {
  context: path.resolve(__dirname),

  entry: ["babel-polyfill", "./index.js"],

  resolve: {
    extensions: [".js"],
    modules: [path.resolve("./"), "node_modules"],
    fallback: {
      fs: false,
      path: false,
    },
  },
  output: {
    filename: "./bundle.js",
    // the output bundle

    path: path.resolve(__dirname, "./" /*"./dist"*/),
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //   Promise: "es6-promise",
    //   fetch:
    //     "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch",
    // }),

    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],

  devServer: {
    // watchContentBase: true, // initiate a page refresh if static content changes
    host: "127.0.0.1",
    port: 8090,
    historyApiFallback: false,
    hot: true,
    contentBase: "./demo",
    open: true,
    openPage: dcPath,
    headers: {
      "Access-Control-Allow-Origin": dcPath,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },

  /* uncomment the following line for debugging */
  optimization: { minimize: false },
};

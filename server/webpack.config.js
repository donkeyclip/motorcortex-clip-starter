/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname),

  entry: "./index",

  output: {
    path: path.resolve(__dirname, "./"),
    // the output bundle
    filename: "./bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        type: "asset/source",
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer"),
                  require("cssnano")({
                    preset: "default",
                  }),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {
        test: /\.(ts|js)x?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    // do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  optimization: {
    chunkIds: "size",
    // method of generating ids for chunks
    moduleIds: "size",
    // method of generating ids for modules
    mangleExports: "size",
    // rename export names to shorter names
    minimize: true,
    mergeDuplicateChunks: true,
    // minimize the output files
    minimizer: [`...`, new CssMinimizerPlugin()],
  },

  devServer: {
    host: "127.0.0.1",
    port: 8090,
    historyApiFallback: false,
    hot: true,
    static: path.join(__dirname),
    open: "https://code.donkeyclip.com",
  },
};

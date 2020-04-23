const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

function getModel() {
  return process.env.NODE_ENV === "development" ? "development" : "production";
}

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: getModel(),
  // https://www.webpackjs.com/configuration/devtool/
  devtool: "cheap-module-source-map",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    library: "umd",
    libraryTarget: "umd",
  },
  devServer: {
    contentBase: "./dist",
    port: 8001,
    open: true,
    hot: true,
    hotOnly: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      chunks: ["index"],
      title: "title",
    }),
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 102400,
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};

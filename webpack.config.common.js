const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),

    // Create a new class instance for each view file
    // Another instance of the HtmlWebpackPlugin would be necessary for more views
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: "body",
      template: path.resolve(__dirname, "src", "index.ejs"),
    }),
    new HtmlWebpackPlugin({
      filename: "register.html",
      inject: "body",
      template: path.resolve(__dirname, "src", "register.ejs"),
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      inject: "body",
      template: path.resolve(__dirname, "src", "login.ejs"),
    }),
  ],
  module: {
    rules: [{ test: /\.ejs/i, use: ["html-loader", "template-ejs-loader"] }],
  },
};

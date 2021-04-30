const webpack = require("webpack");
const ReactRefreshWEbpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Hakmas"),
    }),
    new ReactRefreshWEbpackPlugin(),
  ],
};

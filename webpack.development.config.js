const webpack = require("webpack");
const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "/public"),
    headers: {
      "X-Frame-Options": "sameorigin"
    },
    historyApiFallback: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:5000"
    }
  },
  entry: ["babel-polyfill", __dirname + "/src/index.js"],
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: [
              [
                "env",
                {
                  targets: {
                    browsers: ["last 2 versions", "ie >= 11"]
                  }
                }
              ],
              "react",
              "stage-0"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  plugins: [
    // Disable code splitting as it's creating many duplicate bundle profiles
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3312,
      files: [
        "./public/*.html",
        "./public/assets/scss/*.scss",
        "./public/assets/variables/*.scss",
        "./public/assets/mixins/*.scss",
        "./public/assets/reset/*.scss"
      ],
      proxy: "http://localhost:3000/"
    })
  ]
};

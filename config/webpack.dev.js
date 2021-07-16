const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/client/js/index.js',
  output: {
    libraryTarget: 'var',
    library: 'Client',
  },
  devServer: {
    injectClient: false,
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: '/.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/client/styles/_variables.scss',
                './src/client/styles/_mixins.scss',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html',
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: false,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
    new WorkboxPlugin.GenerateSW(),
  ],
};

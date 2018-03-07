import { join } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

import { paths, isProd, cssConfig } from './config/webpack';

module.exports = {
  entry: join(paths.JS, 'index'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(s*)css$/,
        use: cssConfig,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(paths.SRC, 'index.html'),
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
    }),
    new ExtractTextPlugin({
      filename: 'style.bundle.css',
      disable: !isProd,
    }),
    new StyleLintPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: `${paths.JS}/components`,
      sassHelpers: `${paths.CSS}/01-helpers/helpers.scss`,
    },
  },
};

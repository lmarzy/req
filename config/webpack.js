import { resolve } from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// Paths
const paths = {
  DIST: resolve(__dirname, '../dist'),
  SRC: resolve(__dirname, '../src'),
  JS: resolve(__dirname, '../src/js'),
  CSS: resolve(__dirname, '../src/css'),
};

const isProd = process.env.NODE_ENV === 'production';

const cssCommon = ['css-loader?modules&importLoaders=1&localIndentName=[name]_local_[hash:base64:5]', 'postcss-loader', 'sass-loader'];
const cssDev = ['style-loader'].concat(cssCommon);
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: cssCommon,
});

const cssConfig = isProd ? cssProd : cssDev;

export {
  paths,
  isProd,
  cssConfig,
};

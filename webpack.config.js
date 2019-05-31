const Config = require('webpack-chain');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = new Config();

const {
  loader: extractLoader,
  options: extractOptions
} = ExtractTextPlugin.extract({})[0]

config.mode('development');

config
  .entry('index')
    .add(path.resolve('src/index.js'))
    .end()
  .output
    .path(path.resolve('dist'))
    .filename('mcjView.bundle.js');

config.module
  .rule('vue')
    .test(/\.vue$/)
    .include
      .add(path.resolve('src'))
      .end()
    .use('vue')
      .loader('vue-loader')

config.module
  .rule('js')
    .test(/\.js$/)
    .include
      .add(path.resolve('src'))
      .end()
    .use('babel')
      .loader('babel-loader')
      .options({
        presets: [
          ['@babel/preset-env', { modules: false }]
        ]
      })
      .end()
    .use('eslint')
      .loader('eslint-loader')
      .options({
        extensions: [
          '.js',
          '.jsx',
          '.vue'
        ]
      })

config.module
  .rule('less')
    .test(/\.less$/)
    .include
      .add(path.resolve('src'))
      .end()
    .use('style')
      .loader(extractLoader)
      .options(extractOptions)
      .end()
    .use('css')
      .loader('css-loader')
      .end()
    .use('less')
      .loader('less-loader')
      .end();

config
  .plugin('extractTextPlugin')
    .use(ExtractTextPlugin, ['mcjView.css'])
    .end()
  .plugin('cleanWebpackPlugin')
    .use(CleanWebpackPlugin)
    .end()
  .plugin('Vue')
    .use(VueLoaderPlugin)

config.resolve
  .extensions
    .merge(['.js', '.jsx', '.vue', '.json'])
    .end()
  .alias
    .set('@', path.resolve('src'));

module.exports = config.toConfig();

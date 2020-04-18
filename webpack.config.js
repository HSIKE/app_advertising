const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require("mini-css-extract-plugin");
// const purifyCssWebpack = require("purifycss-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');


const root = path.join(__dirname, 'public');
const outputRoot = path.join(__dirname, 'build');

// const jsFiles = fs.readdirSync(path.join(root, 'js'));
//
// const entry = jsFiles.reduce((prev, name) => ({
//   ...prev,
//   [name]: path.join(root, 'js', name),
// }), {});
const indexHtml = path.join(root, 'index.html');

module.exports = {
  mode: 'production',
  entry: indexHtml,
  output: {
    filename: 'index.html',
    path: outputRoot,
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attributes: {
                list: [
                  {
                    tag: 'img',
                    attribute: 'src',
                    type: 'src',
                  },
                  {
                    tag: 'img',
                    attribute: 'data-src',
                    type: 'src',
                  },
                  {
                    tag: 'img',
                    attribute: 'data-src-ios',
                    type: 'src',
                  },
                  {
                    tag: 'img',
                    attribute: 'data-src-android',
                    type: 'src',
                  },
                  {
                    tag: 'link',
                    attribute: 'href',
                    type: 'src',
                  },
                  {
                    tag: 'script',
                    attribute: 'src',
                    type: 'src',
                  }
                ]
              },
              minimize: false,
            },
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          'file-loader?name=css/[name].[ext]',
          'extract-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'file-loader?name=js/[name].[ext]',
          'uglify-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          fallback: 'file-loader?name=images/[hash].[ext]',
          limit: 5 * 1024,
        },
      },
      {
        test: /\.(otf|wof|eof|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '../images/fonts/[name].[ext]',
          useRelativePath: false,
          publicPath: './',
          outputPath: './fonts',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['build'],
    }),
    // new ExtractTextPlugin({
    //   filename: '[name].css',
    //   publicPath: './'
    // }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
      }
    }),
    // new BabelMinifyPlugin({
    //   presets: ['minify']
    // }, {
    //   test: /\.js$/,
    //   comments: false,
    // }),
    // new UglifyJSPlugin({
    //   uglifyOptions: {
    //     compress: {
    //       warnings: false,
    //       drop_debugger: false,
    //       drop_console: true
    //     }
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: path.join(root, 'index.html'),
      filename: 'index.html',
      inject: false,
      hash: false,
      minify: true,
      favicon: path.join(root, 'favicon.ico'),
    }),
  ],
}

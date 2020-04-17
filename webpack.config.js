const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require("mini-css-extract-plugin");
// const purifyCssWebpack = require("purifycss-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const TerserPlugin = require('terser-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');


const root = path.join(__dirname, 'public');
const outputRoot = path.join(__dirname, 'build');

const jsFiles = fs.readdirSync(path.join(root, 'js'));

const entry = (arr) => arr.reduce((prev, name) => ({
  [name]: path.join(root, 'name'),
}), {});

module.exports = {
  mode: 'production',
  entry: path.join(root, 'main.js'),
  output: {
    filename: 'main.js',
    path: outputRoot,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'file-loader?name=[name].[ext]',
          { loader: 'extract-loader' },
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
                  // {
                  //   tag: 'script',
                  //   attribute: 'src',
                  //   type: 'src',
                  // }
                ]
              },
              minimize: true,
            },
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractTextPlugin.loader,
            options: {
              filename: 'css/[name].[hash].[ext]',
              publicPath: './'
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: '/node_modules/',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 5 * 1024,
          publicPath: './',
          filename: 'images/[name].[ext]',
        },
      },
      {
        test: /\.(otf|wof|eof|ttf)$/,
        loader: 'file-loader?name=images/fonts/[name].[hash].[ext]',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['build']
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.join(root, 'img'),
    //     to: './images',
    //   },
    // ]),
    new ExtractTextPlugin({
      filename: '[name].css',
      publicPath: './'
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
      }
    }),
    // new TerserPlugin({
    //   parallel: true,
    //   terserOptions: {
    //     ecma: 6,
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: path.join(root, 'index.html'),
      filename: 'index.html',
      inject: true,
      hash: false,
      minify: false,
      favicon: path.join(root, 'favicon.ico'),
    }),
  ],
}

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');


const root = path.join(__dirname, 'public');
const outputRoot = path.join(__dirname, 'build');

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
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(root, 'index.html'),
      filename: 'index.html',
      inject: true,
      hash: false,
      minify: true,
      favicon: path.join(root, 'favicon.ico'),
    }),
  ],
}

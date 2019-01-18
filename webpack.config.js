const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const srcPath = path.resolve(__dirname, "src");

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            compact: false,
            //minimize: false,
            babelrc: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }],
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        include: srcPath,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "style-loader"
          }, 
          {
            loader: "css-loader"
          }, 
          {
            loader: "sass-loader",
            options: {
                includePaths: [path.resolve(__dirname, 'src/styles/'),]
            }
          }
        ]
        /*use: ExtractTextPlugin.extract({
          fallback: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                minimize: true,
              },
            },
          ],
        }),*/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public/index.html')
    }),
    /*new ExtractTextPlugin({
      filename: 'style.css',
    }),*/
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  /*devServer: {
    contentBase: './',
    watchContentBase: true,
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:3002',
      },
    }
  }*/
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    proxy: {
      "/api/*": "http://localhost:3002",
    }
  }
};

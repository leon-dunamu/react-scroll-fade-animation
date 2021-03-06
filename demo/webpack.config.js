const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const webpack = require('webpack');

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'scss'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)/,
        use: ['file-loader'],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 1% in KR'],
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
            '@babel/typescript',
          ],
          plugins: [
            '@babel/plugin-transform-runtime',
            [
              'module-resolver',
              {
                alias: {
                  '~/*': './src',
                },
              },
            ],
            isDevelopment && require.resolve('react-refresh/babel'),
          ].filter(Boolean),
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-react-start-kit',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ForkTsCheckerWebpackPlugin(),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
    publicPath: './',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
    publicPath: './',
    noInfo: true,
    port: 3000,
    hot: true,
    writeToDisk: true,
    historyApiFallback: true,
    // liveReload: true,
    // watchContentBase: true,
  },
};

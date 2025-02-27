const path = require('path');
/*
 * Why i should use path.resolve(__dirname, 'src/index.js') instead of 'src/index.js'?
 * Because the path.resolve(__dirname, 'src/index.js') will return the absolute path of the file src/index.js
 * and this is important because the webpack will use this path to create the bundle file.
 * also, the __dirname is a global variable that will return the directory name of the current module.
 * also too, runs to different operating systems, the path.resolve(__dirname, 'src/index.js') will return the correct path independently of the operating system.
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    // contentBase: path.resolve(__dirname, 'build'),
    port: 3000,
  },
};

const path = require("path");
const HtmlWebpackPlugin = requiere('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), //dist de distribution, puede ser cualquier nombre
    filename:'bundle.js',
  },
  resolve: {
      extensions:['.js','.jsx'],
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          },
          {
              test: /\.html$/,
              use: [
                  {
                      loader: 'html-loader'
                  }
              ]
          }
      ]
  },
  plugin: [
      new HtmlWebpackPlugin({
          tamplate: './public/index.html',
          filename: './index.html'
      })
  ] 
};

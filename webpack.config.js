const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require('./package.json');
const { APPLICATION } = process.env;
const env = process?.env?.NODE_ENV || 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'public/[hash]-[name][ext][query]',
    filename: '[hash]-bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|svg|gif|ico|webp|pdf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};



const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
        type: 'asset/inline'
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpg)$/i,
        type: 'asset',
        use: [{
            loader: 'image-webpack-loader',
            options: {
                pngquant: {
                    quality: [.90, .95],
                },
            }
        }],
        parser: {
            dataUrlCondition: {
                maxSize: 10 * 1024 // 10kb
            }
        },
        generator: {
            filename: 'images/[name]-[hash][ext]'
        }
    }
    ]
  }
};

module.exports = config;
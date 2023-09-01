const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-numbers.js',
      library: {
        name: "parallax-horizontal-scroll",
        type: "umd"
      },
    },
   externals: {
     lodash: {
       commonjs: 'lodash',
       commonjs2: 'lodash',
       amd: 'lodash',
       root: '_',
     },
   },
    module: {
      rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
    },
     plugins: [new MiniCssExtractPlugin()],
  };

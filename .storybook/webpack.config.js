const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)$/,
        use: 'file-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg/,
        use: 'svg-url-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              // importLoaders: 2,
              modules: true,
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              outputStyle: 'expanded',
              includePaths: [path.resolve(__dirname, '../src/styles')],
            },
          },
        ],
        include: path.resolve(),
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', 'jsx', '.js'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
};

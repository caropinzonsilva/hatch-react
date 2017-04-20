import webpack from 'webpack';
import path from 'path';
import styleLintPlugin from 'stylelint-webpack-plugin';

export default {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.jsx?$/,
      options: {
        eslint: {
          emitWarning: true
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new styleLintPlugin({
      configFile: path.join(__dirname, '..', '.stylelintrc'),
      files: '**/*.?(sa|sc|c)ss',
      context: path.join(__dirname, '..', 'src')
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    overlay: true,
    port: '3000'
  },
  devtool: 'cheap-eval-source-map',
};

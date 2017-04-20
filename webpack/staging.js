import webpack from 'webpack';

export default {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('staging')
      }
    })
  ]
};

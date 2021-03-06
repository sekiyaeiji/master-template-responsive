const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    common: './src/ts/common.ts'
  },
  output: {
    path: __dirname + '/../dist/js',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
      new TSLintPlugin({
          files: ['./src/ts/**/*.ts']
      })
  ]
}

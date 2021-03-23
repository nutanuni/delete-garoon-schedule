const ShebangPlugin = require('webpack-shebang-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  target: 'node',
  externals: [nodeExternals()], // node_modules配下のライブラリはバンドルしないようにする設定
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  { 'modules': false }
                ]
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new ShebangPlugin()
  ]
};
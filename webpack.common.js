const ShebangPlugin = require('webpack-shebang-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  target: 'node',
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
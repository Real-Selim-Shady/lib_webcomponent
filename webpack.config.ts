const path = require('path');
const { AngularWebpackPlugin } = require('@ngtools/webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      },
    ]
  },
  plugins: [
    new AngularWebpackPlugin({
      tsConfigPath: './tsconfig.app.json',
      entryModule: './projects/custom-button/src/lib/custom-button.module#CustomButtonModule'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-angular-element.js'
  },
  mode: 'production'
};

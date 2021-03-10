const { AngularCompilerPlugin } = require('@ngtools/webpack');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /app\.module\.ts$/,
        use: [
          {
            loader: path.resolve(
              __dirname,
              "loaders/add-module/index.js"
            ),
          },
        ],
      },
    ],
  },
  plugins: [
    new AngularCompilerPlugin({
      directTemplateLoading: true,
      tsConfigPath: path.join(__dirname, './tsconfig.app.json'),
    }),
  ],
};

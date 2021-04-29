const path = require('path');

const {
  REPO_NAME,
  OUTPUT_EXTISION,
  OUTPUT_TITLE,
  PUBLIC_PATH,
} = process.env;

const publicPath = PUBLIC_PATH && ( PUBLIC_PATH + REPO_NAME );
const outputFile = REPO_NAME + OUTPUT_EXTISION;

module.exports = {
  publicPath: publicPath,
  lintOnSave: true,
  pages: {
    index: {
      entry: "src/main.ts",
      filename: outputFile,
      title: OUTPUT_TITLE,
    },
  },
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/styles/*.styl'),
      ]
    }
  }
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/imports.styl")],
    });
}
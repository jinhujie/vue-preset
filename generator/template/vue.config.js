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
    configStylus(config);
    config.devServer
      .proxy(generateDevseverProxy())
      .disableHostCheck(true);
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/styles/*.styl'),
      ]
    }
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'development') {
      fixVueSFCSourcemap(config);
    }
  },

};
function configStylus(config) {
  const types = ["vue-modules", "vue", "normal-modules", "normal"];
  types.forEach((type) =>
    addStyleResource(config.module.rule("stylus").oneOf(type))
  );
} 

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/imports.styl")],
    });
}

function generateDevseverProxy () {
  const devServerProxy = {};
  ["activity/*", "match"].forEach((context) => {
    devServerProxy[context] = {
        target: "http://yapi.tuwan.com",
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
        withCredentials: true,
    }
  })
  return devServerProxy;
}

function fixVueSFCSourcemap (config) {
  config.devtool = 'eval-source-map';
  config.output.devtoolFallbackModuleFilenameTemplate = 'webpack:///[resource-path]?[hash]';
  config.output.devtoolModuleFilenameTemplate = info => {
    const isVue = info.resourcePath.match(/\.vue$/);
    const isScript = info.query.match(/type=script/);
    const hasModuleId = info.moduleId !== '';

    // Detect generated files, filter as webpack-generated
    if (
      // Must result from vue-loader
      isVue
      // Must not be 'script' files (enough for chrome), or must have moduleId (firefox)
      && (!isScript || hasModuleId)
    ) {
      let pathParts = info.resourcePath.split('/');
      const baseName = pathParts[pathParts.length - 1];
      // prepend 'generated-' to filename as well, so it's easier to find desired files via Ctrl+P
      pathParts.splice(-1,1,`generated-${baseName}`);
      return `webpack-generated:///${pathParts.join('/')}?${info.hash}`;
    }

    // If not generated, filter as webpack-vue
    return `webpack-vue:///${info.resourcePath}`;
  }
}
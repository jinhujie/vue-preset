const {
  REPO_NAME,
  OUTPUT_EXTISION,
  OUTPUT_TITLE,
  PUBLIC_PATH,
  VUE_APP_MOBILE,
} = process.env;

function generateFileNameWithDevice(repoName) {
  if (VUE_APP_MOBILE) {
    return repoName + "-m" + OUTPUT_EXTISION;
  }
  return repoName + OUTPUT_EXTISION;
}

module.exports = {
  publicPath: PUBLIC_PATH,
  css: {
    // requireModuleExtension: false,
  },
  lintOnSave: true,
  pages: {
    index: {
      entry: "src/main.ts",
      filename: generateFileNameWithDevice(REPO_NAME),
      title: OUTPUT_TITLE,
    },
  },
};

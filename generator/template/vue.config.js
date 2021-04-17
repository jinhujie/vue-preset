const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

const argv = process.argv || [];
const env_local = '--env_local';
const env_local_index = argv.findIndex(arg => arg === env_local );
const runningServerLocally = env_local_index !== -1;

module.exports = {
  css: {
    // requireModuleExtension: false,
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('$src', resolve('src'))
  },
  lintOnSave: true,
  indexPath: "loldata.htm",
  publicPath: runningServerLocally ? '' : "https://asset.tuwan.com/activity/lol-data/",
}
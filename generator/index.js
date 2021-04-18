module.exports = api => {
  api.render('./template');
  api.extendPackage({
    devDependencies: {
      "axios": "^0.21.1",
      "swrv": "^1.0.0-beta.8",
    }
  })
}
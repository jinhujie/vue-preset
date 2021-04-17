modules.exports = api => {
  api.render('./template');
  api.extendPackage({
    devDependencies: {
    }
  })
}
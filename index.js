const loaderUtils = require('loader-utils')

module.exports = function (source, map) {
  const loaderContext = this
  const callback = loaderContext.async()

  if (
    !/\.vue$/.test(loaderContext.resourcePath)
    || loaderContext.resourceQuery.indexOf('type=template') == -1
    || /^</.test(source.trim())
  ) {
    loaderContext.cacheable()
    callback(null, source, map)
    return
  }


  const options = loaderUtils.getOptions(loaderContext) || {}
  const variables = options.variables || ['window', 'location', 'document']

  variables.forEach((variable) => {
    let name = ('_vm.' + variable).replace(/([\.])/g, '\\$1')
    source = source.replace(new RegExp(name, 'g'), variable)
  })

  loaderContext.cacheable()
  callback(null, source, map)
}
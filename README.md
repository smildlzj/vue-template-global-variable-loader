# vue-template-global-variable-loader 

[![NPM version](https://img.shields.io/npm/v/vue-template-global-variable-loader.svg)](https://www.npmjs.com/package/vue-template-global-variable-loader)


## Installation

```
npm install -D vue-template-global-variable-loader
```

## webpack Configuration

```javascript

module.exports = {
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        resourceQuery: /type=template/,
        enforce: 'post',
        loader: 'vue-template-global-variable-loader',
        options: {
          variables: ['window', 'location', 'document', '_'] // add global variable as you want 
        }
      }
    ]
  }
}

```

## License

MIT


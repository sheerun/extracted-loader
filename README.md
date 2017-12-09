# extracted-loader [![NPM version][npm-image]][npm-url]

[npm-image]: http://img.shields.io/npm/v/extracted-loader.svg?style=flat-square
[npm-url]: http://npmjs.org/package/extracted-loader

It reloads extracted stylesheets extracted with `ExtractTextPlugin`.

No configuration needed. A better [css-hot-loader](https://github.com/shepherdwind/css-hot-loader).

## Use case

When you change stylesheets, you want only stylesheets to reload, not the whole page.

## Installation

```
npm install extracted-loader --save-dev
```

or

```
yarn add extracted-loader --dev 
```

And then you can use it for example as so:

```js
config.module.rules.push({
  test: /\.css$/,
  use: ['extracted-loader', ExtractTextPlugin.extract({
    /* Your configuration here */
  })]
})

config.plugins.push(new ExtractTextPlugin('index.css'))
```


## Example use with sass

```js
config.module.rules.push({
  test: /\.(sa|sc|c)ss$/,
  use: ['extracted-loader'].concat(ExtractTextPlugin.extract({
    use: [
      "babel-loader",
      {
        loader: 'css-loader',
        options: {
          url: true,
          minimize: !dev,
          sourceMap: dev,
          importLoaders: 2
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: dev,
          plugins: [
            require('autoprefixer')({
              /* options */
            })
          ]
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: dev
        }
      }
    ]
  }))
})

config.plugins.push(new ExtractTextPlugin('index.css'))
```

## How it works

By reloading all relevant `<link rel="stylesheet">` when extracted text changes.

## Contributing

Yes, please

## License

MIT

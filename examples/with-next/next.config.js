const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.((sa|sc|c)ss|jpg|png)$/,
      use: [
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]'
          }
        }
      ]
    })

    config.module.rules.push({
      test: /\.(jpg|png|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '.static/[hash].[ext]',
            outputPath: dev ? __dirname + '/' : undefined,
            publicPath: function (url) {
              return url.replace(/^.*.static/, '/static')
            }
          }
        }
      ]
    })

    config.module.rules.push({
      test: /\.(sa|sc|c)ss$/,
      use: ['extracted-loader'].concat(
        ExtractTextPlugin.extract({
          use: [
            'babel-loader',
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
        })
      )
    })

    config.plugins.push(
      new ExtractTextPlugin(
        dev ? path.join(__dirname, '.static/index.css') : '.static/index.css'
      )
    )

    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}

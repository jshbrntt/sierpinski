const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Package = require('./package')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

let config = {}

config.context = path.resolve(__dirname, 'src')

config.entry = {
  sierpinski: './main.js'
}

config.output = {
  path: path.join(__dirname, 'dist'),
  filename: '[name].bundle.js',
  sourceMapFilename: 'bundle.js.map'
}

config.resolve = {
  alias: {
    sierpinski: path.resolve(__dirname, 'src')
  }
}

config.externals = {
  document: 'document',
  window: 'window',
  promise: 'Promise'
}

config.module = {
  rules: [{
    test: /\.js$/,
    include: [
      path.resolve(__dirname, 'src')
    ],
    loader: 'babel-loader',
    query: {
      compact: true,
      presets: [
        ['es2015', {modules: false}]
      ]
    }
  }, {
    test: /\.scss$/,
    use: [{
      loader: 'style-loader'
    }, {
      loader: 'css-loader'
    }, {
      loader: 'sass-loader'
    }]
  }]
}

config.devtool = 'source-map'

config.devServer = {
  contentBase: './dist',
  host: '0.0.0.0',
  port: '8080',
  stats: {
    colors: true,
    chunks: false
  }
}

config.plugins = [
  new HtmlWebpackPlugin({
    title: Package.name.charAt(0).toUpperCase() + Package.name.slice(1),
    template: './index.ejs'
  }),
  new CleanWebpackPlugin([
    'dist'
  ])
]

if (process.env.NODE_ENV === 'PROD') {
  config.plugins.push(new UglifyJSPlugin())
}

module.exports = config

module.exports = [
  {
    entry: {
      bundle: './client/src/index.js',
    },
    output: {
      path: './client/dist',
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: [
            'babel-loader'
          ]
        },
      ]
    },
    externals: {
      'cheerio': 'window',
      'react/addons': 'react',
      'react/lib/ExecutionEnvironment': 'react',
      'react/lib/ReactContext': 'react',
    }
  }, {
    entry: {
      test: './test/client/index.js',
    },
    output: {
      path: './client/dist',
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: [
            'babel-loader'
          ]
        }      ]
    },
    externals: {
      'cheerio': 'window',
      'react/addons': 'react',
      'react/lib/ExecutionEnvironment': 'react',
      'react/lib/ReactContext': 'react',
    }
  }
]

const webpack = require('webpack');
const path = require('path');

const WebpackBrowserPlugin = require('webpack-browser-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rimraf = require('rimraf');

const buildPath = path.join(__dirname, './build');
const sourcePath = path.join(__dirname, './src');

const NODE_ENV = process.env.NODE_ENV;
const IS_PROD = NODE_ENV === 'production';

rimraf.sync(path.resolve(__dirname, 'build'), ['unlinkSync']);

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor-[hash].js'
  }),
  new webpack.EnvironmentPlugin({
    IS_PROD
  }),
  new WebpackBrowserPlugin(),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html'
  })
];

const rules = [
  {
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader'
    ]
  },
  {
    test: /\.(otf|woff2|png|gif|jpg?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader'
  },
  {
    test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
    loader: 'url-loader?limit=100'
  }
];

if (IS_PROD) {
  // Production plugins
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        drop_console: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin('style-[hash].css')
  );

  // Production rules
  rules.push(
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[folder]__[local]--[hash:base64:4]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      })
    }
  );
} else {
  // Development plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );

  rules.push(
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }
  );
  // Development rules
  rules.push(
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
            localIdentName: '[folder]__[local]--[hash:base64:4]'
          }
        },
        {
          loader: 'postcss-loader'
        }
      ]
    }
  );
}

module.exports = {
  devtool: IS_PROD ? '' : 'source-map',
  context: sourcePath,
  entry: {
    js: './index.js',
    vendor: [
      'immutable',
      'react-dom',
      'react-router',
      'react'
    ]
  },
  output: {
    path: buildPath,
    publicPath: '',
    filename: 'app-[hash].js'
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src')
    ]
  },
  plugins,
  devServer: {
    contentBase: IS_PROD ? './build' : './src',
    historyApiFallback: true,
    port: 3000,
    compress: IS_PROD,
    inline: !IS_PROD,
    hot: !IS_PROD,
    host: '127.0.0.1',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m'
      }
    },
    proxy: {
      '/ncis/*': {
        target: 'http://192.168.130.14:9091',
        secure: false,
        changeOrigin: true
      }
    }
  }
};

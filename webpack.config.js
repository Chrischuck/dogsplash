const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  resolve: {
    modules: ['src', 'node_modules']
  },
  devtool: 'source-map',
  entry: {
    vendor: ['@babel/polyfill', 'react', 'react-dom'],
    client:     './src/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].chunkhash.bundle.js',
    chunkFilename: '[name].chunkhash.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css)$/,
        use: [
            "style-loader",
            "css-loader"
        ]
      }
     ]
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'With HOC',
      template: './src/index.html',
      filename: './index.html',
      inject: true,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyCSS: true,
        minifyURLs: true,
        minifyJS: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    })
  ]
};

module.exports = webpackConfig;
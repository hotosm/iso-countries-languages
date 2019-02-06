var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: "node",
  mode: "production", 
  entry: './src/index.js',
  resolve: {
    extensions: [ '.js','.json'],
  },
  output: {
    path: path.resolve(__dirname, "lib"), // string
    filename: 'iso-countries-languages.js',
    library: 'IsoCountriesLanguages',
    libraryTarget: 'umd'
  },
  plugins: [
  ],
  module: {
  
  },
  externals: [
   
  ]
}
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  extensions: ['', '.js', '.json'],
  output: {
    path: './lib',
    filename: 'iso-countries-languages.js',
    library: 'IsoCountriesLanguages',
    libraryTarget: 'umd'
  },
  plugins: [
    
  ],
  module: {
    loaders: [
  
    ]
  },
  externals: [
   
  ],
  resolve: {
    
  }
}
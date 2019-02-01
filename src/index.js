var packagedJson = JSON.parse(require('lzstring-loader!./packagedJson.json.icl'));
var supportedLangs = require('./supportedLangs.json');

/**
	 * Returns the list of supported languages
	 * @return {Array} The list of all the supported languages
	 */
var getSupportedLangs = function(){
  return supportedLangs;
};

/**
   * Returns the ISO 3166-1 list of countries translated in the language passed as a parameter
   * @param  {String} lang The desired language for the translation
   * @return {Array}      The countries list
   */
var getCountries = function(lang){
  return packagedJson.countries[lang];
};

  /**
   * Returns the translation for the country code passed as a parameter in the language passed as a parameter
   * @param  {String} lang        The languages desired for the translation
   * @param  {String} countryCode The country code for which to return the country name
   * @return {String}             The translated country name
   */
var  getCountry = function(lang, countryCode){
  return packagedJson.countries[lang][countryCode];
};
  
/**
   * Returns the ISO 639-1 list of languages translated in the language passed as a parameter
   * @param  {String} lang The desired language for the translation
   * @return {Array}      The language list
   */
var getLanguages = function(lang){
  return packagedJson.languages[lang];
};
 
/**
   * Returns the translation for the language code passed as a parameter in the language passed as a parameter
   * @param  {String} lang        The languages desired for the translation
   * @param  {String} langCode The language code for which to return the cuntry name
   * @return {String}             The translated country name
*/
var getLanguage = function(lang, langCode){
  return packagedJson.languages[lang][langCode];
};

module.exports = {
	
  getSupportedLangs: getSupportedLangs,

  getCountries: getCountries,

  getCountry: getCountry,
 
  getLanguages: getLanguages,

  getLanguage: getLanguage

};
var isoCountriesLanguages = require('../lib/iso-countries-languages.js');

var supportedLangs = isoCountriesLanguages.getSupportedLangs();
console.log("Supported languages: ");
console.log(supportedLangs);

var countriesInFrench = isoCountriesLanguages.getCountries('fr');
console.log("Countries in french: ");
console.log(countriesInFrench);

var italyInFrench = isoCountriesLanguages.getCountry('fr', 'IT');
console.log("Italy in french: ");
console.log(italyInFrench);

var languagesInItalian = isoCountriesLanguages.getLanguages('it');
console.log("Languages in italian: ");
console.log(languagesInItalian);

var spanishInItalian = isoCountriesLanguages.getLanguage('it', 'es');
console.log("Spanish in italian: ");
console.log(spanishInItalian);

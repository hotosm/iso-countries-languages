![ Code documentation ](./esdoc/badge.svg)


# iso-countries-languages #

This library provides the full list of [ISO 639-1 languages](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and the full list of [ISO 3166-1 countries](https://en.wikipedia.org/wiki/ISO_3166-1). The library supports 89 languages (the full list is available by querying the library API itself) and it is designed to be easy to import and use.

# How to install and use#

Simply run the following code and look at the examples to see typical usages:
```
npm install iso-countries-languages
```

# Code documentation

[ Code documentation ](./esdoc/index.html)

## API list ##

### getSupportedLangs ###

Returns the list of supported languages.

```
var isoCountriesLanguages = require('iso-countries-languages');

var supportedLangs = isoCountriesLanguages.getSupportedLangs();
console.log("Supported languages: ");
console.log(supportedLangs);
```

#### Output ####
```
Supported languages: 
[ 'af',
  'am',
  'ar',
  'az',
  'ba',
  
  ...
  
  'udm',
  'uk',
  'ur',
  'uz',
  'vi',
  'xh',
  'yi',
  'zh' ]
```

### getCountries ###

Returns the ISO 3166-1 list of countries translated in the language passed as a parameter.
```
var isoCountriesLanguages = require('iso-countries-languages');

var countriesInFrench = isoCountriesLanguages.getCountries('fr');
console.log("Countries in french: ");
console.log(countriesInFrench);
```

#### Output ####
```
Countries in french: 
{ AF: 'Afghanistan',
  AX: 'Les Îles D\'Åland',
  AL: 'L\'albanie',
  DZ: 'L\'algérie',
  AS: 'Samoa Américaines',
  AD: 'Andorre',
  
  ...

  WF: 'Wallis-et-Futuna',
  EH: 'Sahara Occidental',
  YE: 'Yémen',
  ZM: 'La zambie',
  ZW: 'Zimbabwe' }
```

### getCountry ###

Returns the translation for the country code passed as a parameter in the language passed as a parameter.
```
var isoCountriesLanguages = require('iso-countries-languages');

var italyInFrench = isoCountriesLanguages.getCountry('fr', 'IT');
console.log("Italy in french: ");
console.log(italyInFrench);
```

#### Output ####
```
Italy in french: 
Italie
```

### getLanguages ###

Returns the ISO 639-1 list of languages translated in the language passed as a parameter
```
var isoCountriesLanguages = require('iso-countries-languages');

var languagesInItalian = isoCountriesLanguages.getLanguages('it');
console.log("Languages in italian: ");
console.log(languagesInItalian);
```

#### Output ####
```
Languages in italian: 
{ ab: 'Di abcasia',
  aa: 'Lontano',
  af: 'Afrikaans',
  ak: 'Akan',
  sq: 'Albanese',
  am: 'Amarico',
  ar: 'Arabo',
   
  ...

  xh: 'Xhosa',
  yi: 'Yiddish',
  yo: 'Yoruba',
  za: 'Zhuang, Chuang',
  zu: 'Zulu' }

```

### getLanguage ###

Returns the translation for the language code passed as a parameter in the language passed as a parameter
```
var isoCountriesLanguages = require('iso-countries-languages');

var spanishInItalian = isoCountriesLanguages.getLanguage('it', 'es');
console.log("Spanish in italian: ");
console.log(spanishInItalian);
```

#### Output ####
```
Spanish in italian: 
Spagnolo
```
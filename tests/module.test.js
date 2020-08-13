var isoCountriesLanguages = require('../lib/iso-countries-languages.js');
var { getCountryName, getCountryCode } = require('../scripts/utils.js');

test('getCountryName return the correct name and use "name" as fallback', () => {
  const country = {
    type: 'node',
    lat: 12.7503486,
    lon: 122.7312101,
    tags: {
      country_code_iso3166_1_alpha_2: 'PH',
      name: 'Philippines',
      'name:af': 'Filippyne',
      'name:ar': 'الفلبين',
      'name:ast': 'Filipines',
      'name:be': 'Філіпіны',
      'name:bg': 'Филипините',
      'name:br': 'Filipinez',
      'name:ca': 'Filipines',
      'name:': 'Filipíny',
    },
  };
  expect(getCountryName(country, 'bg')).toBe('Филипините');
  expect(getCountryName(country, 'pt')).toBe('Philippines');
  expect(getCountryCode(country)).toBe('PH');
});

test('getCountryCode uses "ISO3166-1:alpha2" tag if "country_code_iso3166_1_alpha_2" is not present', () => {
  const country = {
    type: 'node',
    lat: 12.7503486,
    lon: 122.7312101,
    tags: {
      'ISO3166-1:alpha2': 'PH',
      name: 'Philippines',
      'name:af': 'Filippyne',
      'name:ar': 'الفلبين',
      'name:ast': 'Filipines',
      'name:be': 'Філіпіны',
      'name:bg': 'Филипините',
      'name:br': 'Filipinez',
      'name:ca': 'Filipines',
      'name:': 'Filipíny',
    },
  };
  expect(getCountryCode(country)).toBe('PH');
});

test('supportedLangs is correctly formatted', () => {
  var supportedLangs = isoCountriesLanguages.getSupportedLangs();
  expect(typeof supportedLangs).toBe('object');
  expect(typeof supportedLangs[0]).toBe('string');
  expect(supportedLangs.length).toBe(24);
});
test('getCountries return an array with 222 items', () => {
  var countriesInFrench = isoCountriesLanguages.getCountries('fr');
  expect(typeof countriesInFrench).toBe('object');
  expect(Object.keys(countriesInFrench).length).toBe(222);
  expect(countriesInFrench.ZA).toBe('Afrique du Sud');
});
test('getCountry returns the correct translated name', () => {
  expect(isoCountriesLanguages.getCountry('fr', 'IT')).toBe('Italie');
  expect(isoCountriesLanguages.getCountry('en', 'IT')).toBe('Italy');
  expect(isoCountriesLanguages.getCountry('pt', 'PT')).toBe('Portugal');
});
test('getLanguages returns an object with 184 language names', () => {
  var languagesInItalian = isoCountriesLanguages.getLanguages('it');
  expect(typeof languagesInItalian).toBe('object');
  expect(Object.keys(languagesInItalian).length).toBe(184);
  expect(languagesInItalian.eu).toBe('Basco');
});
test('getLanguage returns the language translated to ', () => {
  expect(isoCountriesLanguages.getLanguage('it', 'es')).toBe('Spagnolo');
  expect(isoCountriesLanguages.getLanguage('it', 'it')).toBe('Italiano');
  expect(isoCountriesLanguages.getLanguage('en', 'pt')).toBe('Portuguese');
  expect(isoCountriesLanguages.getLanguage('pt', 'en')).toBe('Inglês');
});

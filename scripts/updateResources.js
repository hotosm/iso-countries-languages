import fs from 'fs';

import supportedLangs from '../src/supportedLangs';
import countriesGeojson from '../res/countries';
import { getCountryName, getCountryCode } from './utils';

const countries = countriesGeojson.elements
  .filter((country) => typeof getCountryCode(country) === 'string')
  .sort((a, b) => (getCountryName(a, 'en') < getCountryName(b, 'en') ? -1 : 1));

for (const lang of supportedLangs) {
  const data = {};
  countries.forEach((country) => (data[getCountryCode(country)] = getCountryName(country, lang)));
  fs.writeFileSync(`./res/countries/${lang}.json`, JSON.stringify(data));
}
console.log('Finished!');

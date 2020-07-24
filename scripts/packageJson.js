import fs from 'fs';

import supportedLangs from '../src/supportedLangs';

const obj = {
  languages: {},
  countries: {},
};

for (const lang of supportedLangs) {
  obj.languages[lang] = require(`../res/languages/${lang}`);
  obj.countries[lang] = require(`../res/countries/${lang}`);
}

fs.writeFileSync(`./src/packagedJson.json.icl`, JSON.stringify(obj));

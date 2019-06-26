import supportedLangs from '../src/supportedLangs';
import fs from 'fs';

const obj = {
  languages: {},
  countries: {}
};

for (const lang of supportedLangs) {
	obj.languages[lang] = require(`../res/languages/${lang}`);
	obj.countries[lang] = require(`../res/countries/${lang}`);
}

fs.writeFileSync(`./src/packagedJson.json.icl`,
      JSON.stringify(obj));


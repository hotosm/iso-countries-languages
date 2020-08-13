import https from 'https';
import fs from 'fs';

https.get(
  'https://overpass-export.hotosm.org/api/interpreter?data=[out:json][timeout:250];(node["place"="country"];relation(1993208);relation(1216719);relation(1278736);relation(270009);relation(36989);relation(1964272);relation(1703814);node(2000314677););out body;',
  (res) => {
    var data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => fs.writeFileSync(`./res/countries.json`, data));
  },
);

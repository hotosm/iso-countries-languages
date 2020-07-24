import https from 'https';
import fs from 'fs';

https.get(
  'https://overpass-api.de/api/interpreter?data=[out:json][timeout:250];(node["place"="country"];);out body;',
  (res) => {
    var data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => fs.writeFileSync(`./res/countries.json`, data));
  },
);

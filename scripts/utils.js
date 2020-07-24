function getCountryName(country, lang) {
  return country.tags[`name:${lang}`] || country.tags.name;
}

function getCountryCode(country) {
  return country.tags.country_code_iso3166_1_alpha_2 || country.tags['ISO3166-1:alpha2'];
}

module.exports = { getCountryName, getCountryCode };

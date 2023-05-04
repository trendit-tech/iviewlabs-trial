import moment from "moment-timezone";

const availableLocales = [
  {
    country_code: "IN",
    locale: "hi-IN",
    country_name: "India",
  },
  {
    country_code: "US",
    locale: "en-US",
    country_name: "United States",
  },
];

const countryNames = {
  EST: "United States",
  GMT: "United Kingdom",
  CET: "France",
  IST: "India",
  AEST: "Australia",
};

export const getCountryData = () => {
  const userZone = moment.tz.guess();
  const now = moment.tz(userZone); // Get a Moment object set to the current time in the user's timezone
  const timeZoneAbbr = now.zoneAbbr(); // Get the timezone abbreviation
  const countryName = countryNames[timeZoneAbbr]; // Look up the country name from a lookup table
  const matchingLocale = availableLocales.filter(
    (val) => val.country_name === countryName
  )[0];
  return matchingLocale ? matchingLocale.locale : "en-US";
};
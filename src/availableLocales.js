const availableLocales = [
  {
    country_code: "IN",
    locale: "hi-IN",
    country_name: "India",
    language: "hi-IN",
  },
  {
    country_code: "AU",
    locale: "en-AU",
    country_name: "Australia",
    language: "en-AU",
  },
];

export const getCountryData = () => {
  return fetch("https://ipapi.co/json")
    .then((response) => response.json())
    .then((data) => {
      return availableLocales.filter(
        (val) => val.country_code === data.country_code
      )[0].locale;
    })
    .catch((error) => console.error(error));
};
const update = (cityName, newCity, {cities}) => {
  cities.find((city) => city.name == cityName).name = newCity;
}

module.exports = update;
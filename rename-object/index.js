const citiesHandler = {
  rename: (newName, object) => {
    object.name = newName;
  },

  update: (cityName, newCityName, object) => {
    object.cities[object.cities.findIndex(({name}) => name == cityName)].name = newCityName;
  },
}

module.exports = citiesHandler;
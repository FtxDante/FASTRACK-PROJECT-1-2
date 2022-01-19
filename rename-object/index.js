const citiesHandler = {
  rename: (newName, object) => {
    object.name = newName;
  },

  update: (cityName, newCityName, object) => {
    const findIndexCity = ({name}) => name == cityName;
    const index = object.cities.findIndex(findIndexCity)
    object.cities[index].name = newCityName;
  },
}

module.exports = citiesHandler;
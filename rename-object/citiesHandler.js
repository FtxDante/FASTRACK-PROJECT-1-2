const citiesHandler = {
  rename: (newName, object) => {
    if(typeof newName == 'string') {
      object.name = newName;
    } else {
      throw new Error('Cant rename: name invalid')
    }
  },

  update: (cityName, newCityName, object) => {
    let found = false;
    object.citys.filter((city) => {
      if(city.name === cityName) {
        found = true
        return city.name = newCityName;
      }
    })
    if(!found) throw new Error('City was not found');
  }
}

module.exports = citiesHandler;
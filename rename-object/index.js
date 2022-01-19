const citiesHandler = {
  rename: (newName, object) => {
    if(typeof newName === 'string') {
      object.name = newName;
    } else {
      throw new Error('Cant rename: name invalid')
    }
  },

  update: (cityName, newCityName, object) => {
    let found = 0;
    object.citys.filter((city) => {
      if(city.name === cityName && found === 0) {
        found++
        return city.name = newCityName;
      }
    })
    if(found === 0) throw new Error('City was not found');
  }
}

module.exports = citiesHandler;
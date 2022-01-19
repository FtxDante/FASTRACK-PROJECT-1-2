const citiesHandler = require('./rename-object');
const object = {
  name: 'test',
  cities: [{
    name: 'Rio Grande',
    state: 'RS'
  },{
    name: 'São Paulo',
    state: 'SP'
  },{
    name: 'Rio Grande',
    state: 'SP'
  }],
};

citiesHandler.rename('Pastel-De-Frango', object);
citiesHandler.update('Rio Grande', 'Fraguinho', object);

console.log(object)

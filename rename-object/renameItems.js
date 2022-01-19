const citiesHandler = require('./citiesHandler');

const object = {
  name: 'test',
  citys: [{
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
citiesHandler.update('Rio Grande', 'Jururu', object);

console.log(object)
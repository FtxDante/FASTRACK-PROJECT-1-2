const citiesHandler = require('./rename-object');
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

console.log('object before: ')
console.log(object)

citiesHandler.rename('Pastel-De-Frango', object);
citiesHandler.update('Rio', 'Fraguinho', object);

console.log('object after: ')
console.log(object)

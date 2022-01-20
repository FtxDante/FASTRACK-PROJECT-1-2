const update = require('./rename-cities')
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
update('Rio Grande', 'Guaramiringa', object);
console.log(object)

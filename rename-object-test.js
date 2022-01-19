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

citiesHandler.rename('Pastel-De-Frango', object);
citiesHandler.update('Rio Grande', 'Fraguinho', object);

console.log(object)

const text = 'sem juros  no Cartão Renner 4x de R$ 17,48*';
var str = "Para maiores informações, veja o Capítulo 3.4.5.1";
var a = str.split(/(capítulo \d+(\.\d)*)/i);

const b = text.split(/(\d*x .* \d+\,\d\d.)/);
console.log(b)
console.log(a)
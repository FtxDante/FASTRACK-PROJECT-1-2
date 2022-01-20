
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

const update = (cityName, newCity, {cities}) => {
  cities.find((city) =>{if(city.name== cityName) return city.name = newCity})
}
update('Rio Grande', 'Alcaçuz', object);

console.log(object)

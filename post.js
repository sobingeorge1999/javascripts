var bike=[
    [1001,'RE',300400,['red','grey','black'],['disk','abs']],
    [1002,'himalaya',340000,['red','grey','black'],['disk','abs']],
    [1003,'jawa',340000,['red','grey','black'],['disk','abs']],
    [1004,'duke',200000,['blue','grey','black'],['disk','abs']],
    [1005,'pulser',230000,['white','grey','black'],['disk','abs']]
]
// print all bike name
var bikename=bike.map(bikes=>bikes[1])
console.log(bikename)

// print bikes price lessthan 2 lakh
var filterprice=bike.filter(bikes=>bikes[2]<250000)
console.log(filterprice)

// is there any bikes available under 2 lakh
var isavailbe=bike.some(bike=>bike[2]<3000000)
console.log(isavailbe);

var bikedetail=bike.find(bike=>bike[1]=='RE')
console.log(bikedetail);


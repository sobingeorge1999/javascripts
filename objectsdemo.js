// class 
// object

// in js we can create object as dic in python

var car={
    name:"swift",
    color:["red",'blue','black'],
    models:['vxi','lxi','vdi'],
    brand:'maruthi',
    price:"3lkh",
    getBrand(){
        return this.brand
    }

}


console.log(car.getBrand());

// console is an object and log is method inside it

// console.log(car.brand);
// console.log(car.color);

// console.log('name' in car)
// console.log("price" in car);

// car['price']='3lack'
// console.log(car);


var person={
    name:"harilal",
    age:21,
    gender:"male"
}
console.log(person)
console.table(person)

person.salary=400000
console.log(person);


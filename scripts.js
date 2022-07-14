

// javascript fundamentales

// method used for displaying message in console

console.log("hai javascripts")
console.log("hai") 

//variables are used to represent a memory location
// keywords -> let,var,const 
// let ->  block level scope  we can use that variable only inside the block
// var -> global scope
// const ->  constant variable 
// `` backtick

var name="arun"
var wishes="morning"
var age=26
var place="kochi"
// am arun my age is 26 and from kochi
console.log(`am ${name} my age is ${age} and from ${place}`);
console.log(`hello hai ${name} thats how we are ${wishes}`);


// ++ -- 
// dont support floor div (//)

//decision making

var num=10
var num2=20

// if(num>0){
//     console.log(`${num} is positive`);
// }
// else{
//     console.log(`${num} is neg`);
// }


// by using ternary operator

console.log(num>0?'positive':"negative");

// if(num%2==0){
//     console.log('even');
// }
// else{
//     console.log('odd');
// }

console.log(num%2==0?"even":"odd");
// print("even" num%2==0 else "odd")   in python

// if(num>num2){
//     console.log(num);
// }
// else{
//     console.log(num2);
// }
console.log(num>num2?num:num2);



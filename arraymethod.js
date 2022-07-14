// map,filter,reduce,some,sort,push,includes,forEach

// var arr=[2,3,1,4,3]
// to find squares
// map method -> to perform a specific function to all objects

// var square=arr.map(n=>n**2)
// console.log(square);

// var cube=arr.map(n=>n**3)
// console.log(cube);

// filter  

//evens
// var even=arr.filter(n=>n%2==0)
// console.log(even);

//sort //sort method has two variable

var ar1=[2,1,3,13,4,242,423]

s=ar1.sort((n1,n2)=>n1-n2)  // n1-n2 means first compare n1 and n2 then smaller will come first n1 else n2 will come 
console.log(s);

// for desending order 
d=ar1.sort((n1,n2)=>n2-n1)
console.log(d);


// push -> to add element to end of arr
ar1.push(30);
console.log(ar1);


// includes  -> return boolean to check an element present or not
console.log(ar1.includes(2));

// some -> return boolean 

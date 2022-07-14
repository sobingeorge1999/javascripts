
function addNumbers(n1,n2){
    return n1+n2
}
function mul(n1,n2){
    return n1*n2
}

console.log(addNumbers(10,20));

// instead of lampda we have arrowfunction

var add=(n1,n2)=>n1+n2
var cube=(n)=>n**3

// function isEven(num){
//     if (num%2==0){
//         return true
//     }
//     else
//     return false
// }

// arrowfunc
function isEven(num){
    return num%2==0 ? true : false

}
// using ternaor operator
var isEven=num => num%2==0?true:false
console.log(isEven(9));


// var ar=[3,30,34,5,9]
// largest number can make


 // arrays

 //objects

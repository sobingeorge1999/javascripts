// length not predefined
// we  can store same and different types of object
// duplicates allowed
// mutable


var arr=[10,10.4,"hai",true,34.4]
console.log(arr[0]);


for(let item of arr){
    console.log(item);
}

var language=["c",'c++','python']

for(let lan of language){
    console.log(lan);
}

var arr1=[1,0,1,0,3,34,3]
for(let num of arr1){
    if(num!=0){
        console.log(num);
    }
}

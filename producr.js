var foods=[
    ['101','idly',5,100],
    ['102','dosa',5,50],
    ['103','chapathi',8,0],
    ['104','porota',10,500],
    ['102','rice',200,40],

]



// print all dishes names


// var foodname=foods.map(dish=>dish[1])
// console.log(foodname);

// foods.map(dish=>dish[1]).forEach(dish_name=>console.log(dish_name))

// print all availble dishes
// var availbedish=foods.filter(ava=>ava[3]>0)
// console.log(availbedish);

// foods.filter(ava=>ava[3]>0).forEach(dish=>console.log(dish))

// print dosa details  find->for specific object we use find
// foods.find(dosa=>dosa[1]=='dosa').forEach(dish=>console.log(dish))

// print costly dish  sort

// foods.sort((d1,d2)=>d2[2]-d1[2]).forEach(dish=>console.log(dish))

console.log(foods.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2));



// is there any dish avai in range 50 t0 100  some



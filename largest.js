// var num1=10,num2=20,num3=30;
// if((num1>num2&&num1>num2)){
//     console.log(num1);
// }
// else if((num2>num1&&num2>num3)){
//     console.log(num2)
// }
// else if ((num3>num1&&num3>num2)){
//     console.log(num3);
// }

// second largest number

var num1=1000,num2=300,num3=200

if((num1>num2)&&(num1>num3)){
    // console.log(`first largest num=${num1}`);
    if(num2>num3){
        console.log(`second ${num2}`);
    }
    else{
        console.log(`second largest ${num3}`);
    }
}
else if((num2>num1)&&(num2>num3)){
    // console.log(`largest num=${num1}`);
    if(num1>num3){
        console.log(`second ${num1}`);
    }
    else{
        console.log(`second largest ${num3}`);
    }
}
else if((num3>num1)&&(num3>num2)){
    // console.log(`largest num=${num1}`);
    if(num2>num3){
        console.log(`second ${num2}`);
    }
    else{
        console.log(`second largest ${num3}`);
    }
}






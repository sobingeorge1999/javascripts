var num =[3,34,30,5,9]

var strArr=num.map(n=>String(n))

strArr.sort((n1,n2)=>String(n1)>String(n2)? -1:1)

console.log(strArr.reduce((n1,n2)=>(n1+n2)>(n2+n1)? (n1+n2) : (n2+n1)));

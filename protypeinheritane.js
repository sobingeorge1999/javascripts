// prototypeinheritence

var baleno={
    brand:"maruthi",
    color:"red",
    price:"7lakh",
    getprice(){
        return this.price
    }
}

var brezza={
    brand:"tpyota",
    price:'5lakh',
    // __proto__:baleno
}

brezza.__proto__=baleno
console.log(brezza.color);

console.log(brezza.getprice());

console.log(baleno.getprice());
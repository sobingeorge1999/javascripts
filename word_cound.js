var text="hello hai hello hai hai hai h hwhej"
var wc={}

// the out for split is an array so we can do map func

text.split(" ").map(w=> w in wc? wc[w]+=1 : wc[w]=1)
console.log(wc);

// var words=text.split(" ")
// for(let word of words){
//     if(word in wc){
//         wc[word]+=1

//     }
//     else{
//         wc[word]=1
//     }

// }
// console.log(wc);



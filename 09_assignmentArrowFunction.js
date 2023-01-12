
console.log(`===========Arrow Function================\n`);
let show = ()=>{
    console.log(`"Good Morning .Today id Sunday"\n`)
}
show();

console.log(`===============Three number of multipilication ===================\n`);

let multiply =(n1,n2,n3=3)=>{
    let mul = n1*n2*n3;
    return mul;    
}
let mulResult = multiply(5,5,2);
console.log(`multipilication[5,5,2] = ${mulResult}`);
let mulRes = multiply(10,4);
console.log(`multipilication[10,4] = ${mulRes}\n`);

console.log(`==============5 Parameters and return it==============\n`);

let addtion =(n1,n2,n3,n4,n5)=>{
    let add = n1+n2+n3+n4+n5;
    return add;    
}
let addResult =addtion(100,100,200,349,756);
console.log(`The Addtion is [100,100,200,349,756] = ${addResult}`);

let addRes = addtion("I am","learing","ES6","features","in depth");
console.log(`The Addtion is ${addRes}`);
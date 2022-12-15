console.log(`------------------------Find The Gretest No------------------------------\n`)
var gretestno = function(num1,num2){
    var res = num1>num2 ? num1 : num2;
    console.log(`The Gretest No Amongst "${num1} and ${num2}" is`,res);
}
gretestno(10,-10);
gretestno(800,899);

// var gretestno = function(num1,num2){
//     var res = num1>num2 ? num1 : num2;
//     // console.log(`The Gretest No Amongst "${gretestno}" is`,res);
//     // return res;
// }
// var result = gretestno(10,-10);
// console.log(result);


console.log(`------------------------Even OR Odd No------------------------------\n`);

var evenoddno = function(value){
var result = value%2==0 ? "even ": "odd";
console.log (`The Given No "${value}" is `,result);
}
evenoddno(29);
evenoddno(44);
evenoddno(0);
evenoddno(144);

console.log(`------------------------Check The Length Of Given Word Is Even Odd------------------------------\n`)

var squareOfWord = function( squareOfWord ){
    var res = squareOfWord.length;
    var squareOfWord1= squareOfWord.length%2==0 ? "even":"odd";
    console.log(`the lenght "${squareOfWord}" is  ` + res +`  the "${squareOfWord}"is`,squareOfWord1);
}
squareOfWord("Javascript");
squareOfWord("Square");
squareOfWord("Google Chrome");

console.log(`----------------------------Ternary Operator-------------------------------------\n`);
console.log(`-------------------Male Marriage Eliglibity-----------------------------\n`);
var maleMarriageEliglibity = function(gender,age,name){
    var resultPassOrFail = (age < 18 && age < 30 ) ? "You Are Samll Chidren": (age<30 ? 
        "You Are Eligible For Marriage" : "You Are Young Old Man");
    console.log(`Hey "${name}" ${resultPassOrFail}`) 
    return resultPassOrFail;
}
maleMarriageEliglibity("male",33 ,"Billgates");
maleMarriageEliglibity("male",17 ,"Carry Minati");
maleMarriageEliglibity("male",25 ,"Stew Jobs");

console.log(`-------------------Female Marriage Eliglibity-----------------------------\n`);

var femaleMarriageEliglibity = function(gender,age,name){
    var resultPassOrFail = (age>18 ? "You Are Eligible For Marriage" : "You Are Not Eligible For Marriage");
    console.log(`Hey "${name}" ${resultPassOrFail}`) 
    return resultPassOrFail;
}
femaleMarriageEliglibity("male",33 ,"Jenifer");
femaleMarriageEliglibity("male",17 ,"Milinda Gates");

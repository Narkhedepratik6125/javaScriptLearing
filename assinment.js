var square = function(num){
    console.log("Square of ",num*num);
    }
    console.log( typeof square);
    square(5);
    square(6);
    square(25);
    square(100);

    var ractangle = function(length , breath){
        var result = length*breath;
        console.log("Area of ractangle",result ,"sq.units");
        return result;

    }
    var result = ractangle(499 , 917);
    console.log(result);

    
   
function swap_Values(value1, value2){
    console.log("Before Swap");
    console.log(value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap");
    console.log(value1, value2);
}
swap_Values("Virat", "Anushka");
swap_Values(1000, 2000);

var mystatment = "js is the most populer language";
console.log("The Give String Is :", mystatment);
console.log("Total charactor To String :",mystatment.length);
console.log("charactor at index 6 is:",mystatment.charAt(6));
console.log("charactor at index 11 is:",mystatment.charAt(11));
console.log("Frist charactor at index 0 is:",mystatment.charAt(0));

var square = function(num){
console.log("The Give String Is length 31 : ",num*num);
}
console.log( typeof square);
square(31);


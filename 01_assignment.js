var mystatment = "    Hey You Are Doing Good Keep it up    ";
console.log("1) The Give String Is :", mystatment);
console.log("2) The length Give String Is :", mystatment.length);

console.log("3) Before Including Extra Sapce :-", mystatment.length);
var resultTrim = mystatment.trim();
 console.log( "4) After Romving Extra Sapce   :-", resultTrim,);
 console.log("5) After Romving Extra Sapce  :-" , resultTrim.length)
var resultlenght =  mystatment.length-resultTrim.length;
console.log( "6) Count Of Extra Space That Romving :-",resultlenght);
console.log("7) The Frist charactor of string is:",resultTrim.charAt(0),
"The Last charactor of string is:",resultTrim.slice(-1));

var studListSplit = resultTrim.split(" ");
console.log("8) Total Words In The String :-", studListSplit.length);
console.log(`9) Index of Word "Good" Is :-`,resultTrim.indexOf("Good"));
console.log("10) (using substr) substring starting form index 22 is:-",resultTrim.substr(22));
console.log("11) (using slice) substring starting form index 22 is:-",resultTrim.slice(22,33));
console.log("12) Is string :-",resultTrim.endsWith("up"));
console.log("13) Is string :-",resultTrim.startsWith("Hey"));
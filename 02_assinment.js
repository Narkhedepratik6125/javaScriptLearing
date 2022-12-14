var squareOfWord = function( squareOfWord ){
    var res = squareOfWord.length;
    var squareOfWord1= squareOfWord.length*squareOfWord.length;
    console.log(`the lenght "${squareOfWord}" is  ` + res +`  the square"${squareOfWord}"is`,squareOfWord1);
}
squareOfWord("Javascript");
squareOfWord("Square");
squareOfWord("Google Chrome");

console.log("=================================");
var resultTrim = "I Am Angular developer"
console.log("The Given String :-",resultTrim);
console.log("length of the String:-",resultTrim.length);
var studListSplit = resultTrim.split(" ");
console.log("No of Word In  String :-", studListSplit.length);
var divResult = resultTrim.length / studListSplit.length;
console.log(`The lenght string Division by no of Words is:- ${divResult}`);
var mulResult  = resultTrim.length * studListSplit.length;
console.log(`The lenght string Multiply by no of Words is:- ${mulResult}`);
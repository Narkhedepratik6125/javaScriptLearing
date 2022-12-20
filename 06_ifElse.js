var votingEligibility = function (age){
    if (age<=0 || age>120) {
        console.log(`Invalid data: ${age}`);
    } else {
       console.log(`Valid data`); 
       if (age>=18) {
        console.log(`Congratulation you can vote: ${age}`);
       }else{
        console.log(`Sorry you are not eligible for vote: ${age}`);
       }
    }
}
votingEligibility(230);
votingEligibility(-20);
votingEligibility(10);
votingEligibility(25);

console.log(`--------------------------------------------------\n`);


function isEvenOrOdd(num) {
  if (typeof num == "number") {
    console.log(`Valid number ${num}`);
    if (num % 2 === 0) {
      console.log(`Even number`);
    } else {
      console.log(`Odd Number`);
    }
  } else {
    console.log(`Invalid number ${num}`);
  }
}
isEvenOrOdd(20);
isEvenOrOdd(11);
isEvenOrOdd("30");

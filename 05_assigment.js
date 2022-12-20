var votingAge = function(age) {
    var votingResult = (age<1 || age>120) ? "In valid Data" : (age>18 ? "Eligible For Vote":"Not Eligible For Vote");
    // return votingResult;
    console.log(`Your Age Is"${age}"..You Are ${votingResult} for Voting`);
}
// console.log(`Your Age Is"${age}"..You Are ${votingAge(0)} for Voting`);
votingAge(17);
votingAge(8);
votingAge(45);
votingAge(20);
votingAge(200);
votingAge(0);
votingAge(-10);

// console.log("==============================================================\n");

// var gradeCalculation = function(grade) {
//     if (grade<90 || grade>100) {
//         console.log(`Fantastic mark  Your Grade is A++`)
//     }
//     if (grade<70 || grade>100) {
//         console.log(`Fantastic mark  Your Grade is A`)
//     }
// }
// gradeCalculation(70);


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
  
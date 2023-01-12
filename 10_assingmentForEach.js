
console.log(`========Array of element and index using for each ========\n`)

const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach(function(currentValue,index) {
    console.log(`value is ${currentValue} & Index is ${index}\n`);
})

console.log(`==========Positive Values in the array==============\n`);
const arrayOfPostive =[];
arrayNumbers.forEach ((currentValue)=>{
    if (currentValue>0) {
        arrayOfPostive.push(currentValue);
        // console.log(currentValue);
    }
})
console.log(arrayOfPostive);



console.log(`==========Negative Values in the array==============\n`);
const arrayOfneg =[];
arrayNumbers.forEach ((currentValue)=>{
    if (currentValue<0) {
        arrayOfneg.push(currentValue);
        // console.log(currentValue);
    }
})
console.log(arrayOfneg);

console.log(`==========Even Number  Values in the array==============\n`);
const arrayOfEvn =[];
arrayNumbers.forEach ((currentValue)=>{
    if (currentValue%2==0) {
        arrayOfEvn.push(currentValue);
        // console.log(currentValue);
    }
})
console.log(arrayOfEvn);



console.log(`==========Even Positioned  Values in the array==============\n`);
const arrayOfEvnindex =[];
arrayNumbers.forEach ((currentValue,index) =>{
    if (index%2==0) {
        arrayOfEvnindex.push(currentValue);
        // console.log(currentValue);
    }
})
console.log(arrayOfEvnindex);



// const arrayOfEvnindex =[];
//     const array = [1, 2, 3, 4, 5, 6, 9];
//     array.forEach (( currentValue, index) =>{
//         if (index%2==0) {
//             arrayOfEvnindex.push(currentValue);
//             // console.log(currentValue);
//         }
//     })
//     console.log(arrayOfEvnindex);

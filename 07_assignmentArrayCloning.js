console.log(`01)================ Shallow Cloing =========\n`);
let arrayNums = [20,3,4,56,90,400,49];
let arrayOfNum = arrayNums;
console.log(arrayNums)
arrayOfNum.push(55,66);
console.log(arrayOfNum);

console.log(`02)============Deep cloine using spread operator And Using push() methods=============\n`);
let arrayOfShallow = [...arrayNums];
console.log(arrayOfShallow);
arrayOfShallow[1] = 10;
arrayNums[1] = 25
console.log(arrayOfShallow);
console.log(arrayNums);


console.log(`----------Upadate the array using the push method---------------\n`);
console.log(arrayNums);
arrayOfShallow.push(10,25);
console.log(arrayOfShallow);

console.log(`--------------Array merrge or concat using sperd opertor -----------------\n`);
let concatArray = arrayNums.concat(arrayOfShallow);
console.log(concatArray);

console.log(`03)==================Given array using megre or concat mehtod and spread operator ======================\n`);
let arryaEven = [2,30,14,8];
console.log(arryaEven);
let concatEvenArray = arrayNums.concat(arryaEven);
console.log(concatEvenArray);

const employee_info = {
    emp_id : 11,
    emp_name :"Pratik Narkhede",
    address :{
        locality:{
            city:"pune",
            state :"maharastra",
            country:"India",
        },

    },
    mobileNumber:[7719866478,9837198129,9320212220]

}
console.log(`04)============create employeeInfo object===============\n`)
console.log(employee_info);
console.log(`05)==============Log the employee Info==================\n`);
console.log(`${employee_info.emp_name} Moblie No are : ${employee_info.mobileNumber}`);
console.log(`Address Is : ${employee_info.address.locality.city}\n ${employee_info.address.locality.state}\n ${employee_info.address.locality.country} `);



const car = {
    carName:"Creta SX",
    company:"Hundai",
    launchYear:2017,
}
const carEngine={
    enginPower : "1100cc",
    maxPower :"113 HP",
}
console.log(`==========Using Object assign===========`);
let carProfile = {...car,...carEngine}
console.log(carProfile);
console.log(`==========Using Sperd opertor===========`);
console.log(carProfile);
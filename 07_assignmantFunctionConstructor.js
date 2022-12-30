function Bank ( bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode
}
let b1 = new Bank ("Yes Bank", "Pune", "YES00077", 1122);
console.log(`Bank Details Is :Bank Name : "${b1.bankName}", location : ${b1.location}, IFSC Code : ${b1.ifscCode}, Barnch Code : ${b1.branchCode},`);

let b2 = new Bank ("SBI Bank", "Nashik", "sbi00067", 3122);
console.log(`Bank Details Is :Bank Name : "${b2.bankName}", location : ${b2.location}, IFSC Code : ${b2.ifscCode}, Barnch Code : ${b2.branchCode},`);


let b3 = new Bank ("Mah Bank", "Mumbai", "mah007", 1022);
console.log(`Bank Details Is :Bank Name : "${b3.bankName}", location : ${b3.location}, IFSC Code : ${b3.ifscCode}, Barnch Code : ${b3.branchCode},`);


let b4 = new Bank ("Axis Bank", "Nagpur", "axis00077", 7822);
console.log(`Bank Details Is :Bank Name : "${b4.bankName}", location : ${b4.location}, IFSC Code : ${b4.ifscCode}, Barnch Code : ${b4.branchCode},`);

console.log(`----------------------------------------------------------------------------------------\n`);

let date = new Date();
date = date.getTime();
// closeDate= date.getTime();
console.log(`the open time of the "${b1.bankName}" is ${date} And Close time is ${date}`);

console.log(`----------------------------------------------------------------------------------------\n`);

console.log(`the open time of the "${b2.bankName}" is ${date} And Close time is ${date}`);

console.log(`----------------------------------------------------------------------------------------\n`);

console.log(`the open time of the "${b3.bankName}" is ${date} And Close time is ${date}`);

console.log(`----------------------------------------------------------------------------------------\n`);


console.log(`the open time of the "${b4.bankName}" is ${date} And Close time is ${date}`);
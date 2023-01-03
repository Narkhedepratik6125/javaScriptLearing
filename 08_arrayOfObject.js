class bank{
    constructor(bank_name, location, account_no, ifsc_code, interest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc_code = ifsc_code;
        this.interest_rate = interest_rate;
    }
}
const banksbi = new bank("SBI bank", "pune", 33943219716 , "sbinoo216", "12%");
const bankaxis = new bank("Axis bank", "mumbai",  34943218765, "axiss990", "13%");
const bankicici = new bank("Icici bank", "nagpur",  23943219716 , "icicin3o216", "14%");
const bankkotak = new bank("Kotak bank", "nashik", 83943219716 , "kotako3216", "8.5%");

console.log(`------------------------------------Creat the Object-----------------------------------------\n`)
console.log(banksbi);
console.log(bankaxis);
console.log(bankicici);
console.log(bankkotak);

console.log(`-----------------------------Traverse with for loop-------------------------------------\n`)
const arrayBank = [banksbi, bankaxis ,bankicici, bankkotak];
for(const castomer of arrayBank){
    console.log(`Bank details are:Bank Name: ${castomer.bank_name} Location: ${castomer.location} `);    
}


console.log(`--------Find the Object which has Bank name:kotak bank unsing for of loop-----------\n`)
for(const detailskotak of arrayBank){
    if(detailskotak.bank_name == "Kotak bank"){
        console.log(`bank Name :${detailskotak.bank_name} location : ${detailskotak.location} Account No : ${detailskotak.account_no}
         IFSC code : ${detailskotak.ifsc_code} Interest rate : ${detailskotak.interest_rate}`)
    }

}
console.log(`--------------------Log on console Using for loop-------------------------\n`);
for(const castomer of arrayBank){
    console.log(castomer);    
}
// console.log(arrayBank);
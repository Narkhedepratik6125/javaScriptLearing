const professor = {
    name:"Khurana",
    age:45,
    gender:"Male",
    city:"Pune",
    degrees :{
        engineering :`csc`,
        phd :`aadv Computing Program`,
        diploma : `Cmpoter science`,
        certificate: {
            certificate1 : `Hacker Rank Participation`,
            certificate2 : `certificate in IFE Course`,
            certificate3 : `certificate Adv Computer Programing `            
        }
    }
    
}
console.log(`1) All The Propertise`)
console.log(professor);

console.log(`----------------------------------------------------`);
console.log(`2) Included Nested object Degrees`)
console.log(professor.degrees);

console.log(`----------------------------------------------------`);
console.log(`3) Included Another Nested object certificate`)
console.log(professor.degrees.certificate);

console.log(`----------------------------------------------------`);
console.log(`5) Try To Add New Property`)
professor.company = "Dassault"
console.log(professor);

console.log(`----------------------------------------------------`);
console.log(`6) Modify Exsting Property`);
professor.age=50
console.log(professor);


console.log(`----------------------------------------------------`);
console.log(`7) delete any one certificate`)
console.log(professor.degrees.certificate);
delete professor.degrees.certificate.certificate1
console.log(professor.degrees.certificate)


console.log(`----------------------------------------------------`);
console.log(`8) Add New Nested object certificate`)
professor.degrees.certificate.newCretificate ="MS-CIT"
console.log(professor.degrees.certificate);


console.log(`----------------------------------------------------`);
console.log(`9) log the nested object certificate on consloe`)
console.log(professor.degrees.certificate);



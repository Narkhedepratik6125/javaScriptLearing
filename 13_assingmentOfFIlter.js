
class employee {
    constructor(emp_id,emp_name,emp_depth,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_depth=emp_depth;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
let employee1 = new employee(22,"Anil","IT",50000,"TCS");
let employee2 = new employee(33,"Radha","HR",74000,"Wipro");
let employee3 = new employee(55,"Rishi","Finance",47000,"TCS");
let employee4 =new employee(66,"Sonali","Finance",45000,"Infy");
let employee5 =new employee(77,"Mohika","IT",40000,"Wipro");
let employee6 =new employee(88,"Vinayak","IT",75000,"TCS");
let employee7 =new employee(99,"Mahesh","HR",85000,"Infy");

const arrayOFEmp = [employee1,employee2,employee3,employee4,employee5,employee6,employee7];

console.log(`\n======Array Of employee=======\n`);
arrayOFEmp.forEach((array)=>{
    console.log(array);
});

console.log(`\n========Filter All Object From TCS========\n`)
const arrayFIlterEmployee = arrayOFEmp.filter((empFilter)=>{
    return empFilter.emp_company=="TCS";
});
console.log(arrayFIlterEmployee);
arrayFIlterEmployee.forEach((element)=>{
    console.log(`Employee Name :${element.emp_name}    Compnany Name : ${element.emp_company}\n`)
});

console.log(`\n===========All Employee Form Wipro==============\n`)
const arrayFIlterEmp1 = arrayOFEmp.filter((employee)=>{
    return employee.emp_company=="Wipro";
});
arrayFIlterEmp1.forEach((array)=>{
    console.log(array)
});

console.log(`\n===========All Employee Deparment IT & HR==============\n`)
const arrayFIlterEmp2 = arrayOFEmp.filter((employee)=>{
    return employee.emp_depth=="IT" || employee.emp_depth =="HR";
})
arrayFIlterEmp2.forEach((array)=>{
    console.log(array)
});

console.log(`\n===========All Employee Whose ID is greter than 50==============\n`)
const arrayFIlterEmp3 = arrayOFEmp.filter((employee)=>{
    return employee.emp_id > 50;
});
arrayFIlterEmp3.forEach((array)=>{
    console.log(array)
});


console.log(`\n===========Name Starts With letter A or V or M==============\n`)
const arrayFIlterEmp4 = arrayOFEmp.filter((employee)=>{
    if (employee.emp_name.startsWith("A")||employee.emp_name.startsWith("M")||employee.emp_name.startsWith("V")) {
        return employee;                
    } ;
})
arrayFIlterEmp4.forEach((array)=>{
    console.log(array)
});

console.log(`\n===========All Employee Average Salary==============\n`);
const arrayFIlterEmp5 = arrayOFEmp.filter((element)=>{
    return element.emp_salary;
});
let arrayOfSal = [];
arrayFIlterEmp5.forEach((element)=>{
    arrayOfSal.push(element.emp_salary);
});
const result = arrayOfSal.reduce((runningtotal,value)=>{
    return runningtotal+value;
});
console.log(`All Employee Average Salary :- ${result/arrayOfSal.length}`);

console.log(`\n===========All Depth-IT Employee Average Salary==============\n`)
const arrayFIlterEmp6 = arrayOFEmp.filter((element)=>{
    return element.emp_depth=="IT"
});
let arrayOfITEmp=[];
arrayFIlterEmp6.forEach((element)=>{
    arrayOfITEmp.push(element.emp_salary);
});
const resIT = arrayOfITEmp.reduce((runningtotal,value)=>{
    return runningtotal+value;
});
console.log(`All Depth-IT Employee Average Salary:- ${resIT/arrayOfITEmp.length}`);
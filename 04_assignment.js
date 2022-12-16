var tcsEligibility = function( greduaction , hsc , ssc, name) {
    var res = ( greduaction>70 || hsc>80 || ssc>90) ? `Congrates "${name}" You Are  Eligible For TCS Interview` :
     `Unfortunately "${name}" You Are Not Eligible For TCS Interview`
    console.log(res);
    
}
tcsEligibility(80,86,90,"Mayur");
tcsEligibility(70,65,55,"Chetan");
tcsEligibility(60,79,88,"Ankita");

console.log(`-----------------------------------------------------------------------\n`);

var Result = (0 =='');
console.log(`"(0 =='')" is ${Result}`);

var Result = (0=='0');
console.log(`"(0 =='0')" is ${Result}`);

var Result = (0==false);
console.log(`"(0 =='false')" is ${Result}`);

var Result = (null==undefined);
console.log(`"(null==undefined)" is ${Result}`);

var Result = (1==[1]);
console.log(`"(1==[1])" is ${Result}`);

var Result = (1==true);
console.log(`"(1==true)" is ${Result}`);

var Result = (1=='1');
console.log(`"(1=='1')" is ${Result}`);
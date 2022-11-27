// assign variables payee NHIFDeductions , NSSFDeductions, grossSalary, netSalary
var payee, NHIFDeductions, NSSFDeductions, grossSalary, netSalary;
// variable grossSalary will take values from the user 
grossSalary = parseInt(prompt("Enter Your Grosspay"));
// use else if statement to check if value taken will be executed in which condition 
if(grossSalary<=24000){
    // assign variable payee that will find product of grossSalary with 0.1
    payee = grossSalary * 0.1;
    if(grossSalary<=5999){
        // if grossSalary will be less than 5999 
        NHIFDeductions = 150;
    }else if((grossSalary>=6000) && (grossSalary<=7999)){
        // this will be executed if grossSalary will be less than or equals 7999 and greater than or equals 6000 
        NHIFDeductions = 300;
    }else if((grossSalary>=8000) && (grossSalary<=11999)){
        // this will be executed if grossSalary will be less than or equals 11999 and greater than or equals 8000 
        NHIFDeductions = 400;
    }else if((grossSalary>=12000) && (grossSalary<=14999)){
        // this will be executed if grossSalary will be less than or equals 14999 and greater than or equals 12000 
        NHIFDeductions = 500;
    }else if((grossSalary>=15000) && (grossSalary<=19999)){
        // this will be executed if grossSalary will be less than or equals 19999 and greater than or equals 15000 
        NHIFDeductions = 600;
    }else{
        // this will be executed if grossSalary will be greater than 20000
        NHIFDeductions = 750;
    }
    // assign variable NSSFDeductions that will find product of grosssalary with 0.06
   NSSFDeductions = grossSalary * 0.06;
//    assign variable netSalary that will find subtraction of grosssalary with addition of payee,NSSFDeductions,NHIFDeductions

   netSalary = grossSalary - (payee + NSSFDeductions + NHIFDeductions);
//    output the net salary
   document.write("Your Net Salary is" + netSalary);
}
else if((grossSalary>=24001) && (grossSalary<=32333)){
    // this will be executed if grossSalary will be less than or equals 32333 and greater than or equals 24001
    payee = grossSalary * 0.25;
    if((grossSalary>=24000) && (grossSalary<=24999)){
        // this will be executed if grossSalary will be less than or equals 24999 and greater than or equals 24000 
        NHIFDeductions = 750;
    }else if((grossSalary>=25000) && (grossSalary>=29999)){
        // this will be executed if grossSalary will be less than or equals 29999 and greater than or equals 25000
        NHIFDeductions = 850;
    }else{
        // this will be executed if grossSalary will be greater than 30000
        NHIFDeductions = 900;
    }
    // assign variable NSSFDeductions that will find product of grosssalary with 0.06
    NSSFDeductions = grossSalary * 0.06;

   netSalary = grossSalary - (payee + NSSFDeductions + NHIFDeductions);
//    output netsalary
   document.write("Your Net Salary is" + netSalary);
}
else{
 // assign variable payee that will find product of grosssalary with 0.3
    payee = grossSalary * 0.3;
    if((grossSalary>=32333) && (grossSalary<=34999)){
        // this will be executed if grossSalary will be less than or equals 34999 and greater than or equals 32333
        NHIFDeductions = 900;
    }else if((grossSalary>=35000) && (grossSalary>=39999)){
        // this will be executed if grossSalary will be less than or equals 39999 and greater than or equals 35000
        NHIFDeductions = 950;
    }else if((grossSalary>=40000) && (grossSalary>=44999)){
        // this will be executed if grossSalary will be less than or equals 44999 and greater than or equals 40000
        NHIFDeductions = 1000;
    }else if((grossSalary>=45000) && (grossSalary>=49999)){
        // this will be executed if grossSalary will be less than or equals 49999 and greater than or equals 45000
        NHIFDeductions = 1100;
    }else if((grossSalary>=50000) && (grossSalary>=59999)){
        // this will be executed if grossSalary will be less than or equals 59999 and greater than or equals 50000
        NHIFDeductions = 1200;
    }else if((grossSalary>=60000) && (grossSalary>=69999)){
        // this will be executed if grossSalary will be less than or equals 69999 and greater than or equals 60000
        NHIFDeductions = 1300;
    }else if((grossSalary>=70000) && (grossSalary>=79999)){
        // this will be executed if grossSalary will be less than or equals 79999 and greater than or equals 70000
        NHIFDeductions = 1400;
    }else if((grossSalary>=80000) && (grossSalary>=89999)){
        // this will be executed if grossSalary will be less than or equals 89999 and greater than or equals 80000
        NHIFDeductions = 1500;
    }else if((grossSalary>=90000) && (grossSalary>=99999)){
        // this will be executed if grossSalary will be less than or equals 99999 and greater than or equals 90000
        NHIFDeductions = 1600;
    }else{
        // this will be executed if grossSalary will be greater than or equals 100000
        NHIFDeductions = 1700;
    }
    
    // assign variable NSSFDeductions that will find product of grosssalary with 0.06
    NSSFDeductions = grossSalary * 0.06;

    netSalary = grossSalary - (payee + NHIFDeductions + NSSFDeductions);
    // output netsalary
    document.write("Your Net Salary is" + netSalary);
}

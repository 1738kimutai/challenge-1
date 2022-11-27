var payee, NHIFDeductions, NSSFDeductions, grossSalary, netSalary;
grossSalary = parseInt(prompt("Enter Your Grosspay"));
if(grossSalary<=24000){
    payee = grossSalary * 0.1;
    if(grossSalary<=5999){
        NHIFDeductions = 150;
    }else if((grossSalary>=6000) && (grossSalary>=7999)){
        NHIFDeductions = 300;
    }else if((grossSalary>=8000) && (grossSalary>=11999)){
        NHIFDeductions = 400;
    }else if((grossSalary>=12000) && (grossSalary>=14999)){
        NHIFDeductions = 500;
    }else if((grossSalary>=15000) && (grossSalary>=19999)){
        NHIFDeductions = 600;
    }else{
        NHIFDeductions = 750;
    }
   NSSFDeductions = grossSalary * 0.06;

   netSalary = grossSalary - (payee + NSSFDeductions + NHIFDeductions);

   document.write("Your Net Salary is" + netSalary);
}
else if((grossSalary>=24001) && (grossSalary<=32333)){
    payee = grossSalary * 0.25;
    if((grossSalary>=24000) && (grossSalary<=2499)){
        NHIFDeductions = 750;
    }else if((grossSalary>=25000) && (grossSalary>=29999)){
        NHIFDeductions = 850;
    }else{
        NHIFDeductions = 900;
    }
    NSSFDeductions = grossSalary * 0.06;

   netSalary = grossSalary - (payee + NSSFDeductions + NHIFDeductions);
   document.write("Your Net Salary is" + netSalary);
}
else{
    payee = grossSalary * 0.3;
    if((grossSalary>=32333) && (grossSalary<=34999)){
        NHIFDeductions = 900;
    }else if((grossSalary>=35000) && (grossSalary>=39999)){
        NHIFDeductions = 950;
    }else if((grossSalary>=40000) && (grossSalary>=44999)){
        NHIFDeductions = 1000;
    }else if((grossSalary>=45000) && (grossSalary>=49999)){
        NHIFDeductions = 1100;
    }else if((grossSalary>=50000) && (grossSalary>=59999)){
        NHIFDeductions = 1200;
    }else if((grossSalary>=60000) && (grossSalary>=69999)){
        NHIFDeductions = 1300;
    }else if((grossSalary>=70000) && (grossSalary>=79999)){
        NHIFDeductions = 1400;
    }else if((grossSalary>=80000) && (grossSalary>=89999)){
        NHIFDeductions = 1500;
    }else if((grossSalary>=90000) && (grossSalary>=99999)){
        NHIFDeductions = 1600;
    }else{
        NHIFDeductions = 1700;
    }
    NSSFDeductions = grossSalary * 0.06;

    netSalary = grossSalary - (payee + NHIFDeductions + NSSFDeductions);
    document.write("Your Net Salary is" + netSalary);
}

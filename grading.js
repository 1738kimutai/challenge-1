// assign a variable Marks
let Marks;
// Marks will prompt the user to enter the value 
Marks = parseInt(prompt("Enter your marks"));
// use else if statement to check if value taken will be executed in which condition 
if(Marks>79){
    // this wii be executed when the values entered will be greater than 79
    console.log("You scored an A");
}
else if((Marks>=60) && (Marks<=79)  ){
    // this will take values greater than 60 and less than 79 
    console.log("You scored B");
}
else if((Marks>=49) && (Marks<=59)){
    // this will take values greater than 49 and less than 59
    console.log("Your grade is C")
}
else if((Marks>=40) && (Marks<=49)){
    // this will take values greater than 40 and less than 49
    console.log("Your grade is D");
}
else if(Marks<40){
    // this will take values  less than 40
    console.log("You scored an E");
}
else{
    // if the values does not lie between 0 and 100 
    console.log("Enter valid marks"); 
}
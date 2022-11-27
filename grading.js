let Marks;
Marks = parseInt(prompt("Enter your marks"));
if(Marks>79){
    console.log("You scored an A");
}
else if((Marks>=60) && (Marks<=70)  ){
    console.log("You scored B");
}
else if((Marks>=49) && (Marks<=59)){
    console.log("Your grade is C")
}
else if((Marks>=40) && (Marks<=49)){
    console.log("Your grade is D");
}
else if(Marks<40){
    console.log("You scored an E");
}
else{
    console.log("Enter valid marks"); 
}

const grade = require('prompt-sync');
const prompt = grade();
// this function generates grades after inputing marks 
function generator(){
  let grade = prompt('Enter your marks:')
  if(grade <= 100 && grade >= 79){
    console.log('A')
  }
  else if(grade >= 60 && grade <= 79){
    console.log('B')
  }
  else if(grade >= 49 && grade <= 59){
    console.log('C')
  }
  else if(grade >= 40 && grade <= 49){
    console.log('D')
  }
  else if(grade <40){
    console.log('E')
  }
  else{
    console.log('enter valid marks');
  }
}
// this calls generate function
generator();


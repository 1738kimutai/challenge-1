
const speedDetector = require('prompt-sync');
const prompt = speedDetector();
// speedMonitor function that uses else if statement to determine the speed limit
function speedMonitor(){
  let speed = prompt("Ask for speed?");
  if (speed<=70){
    console.log("Ok")
  }
  else if(speed > 70 && speed <= 130){
    let demeritPoint = (speed - 70)/5;
    
    console.log(`points: ${demeritPoint}`);
  }
  else{
    console.log("License suspended")
  }
}
// call the speedMonitor function
speedMonitor();
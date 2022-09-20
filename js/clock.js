(function(){
//IIFE start- immedately invoqued fucntion expression
console.info('Hello')
var myNode = document.createElement('div');
document.getElementById('digitalClock').appendChild(myNode);
var updateTime = function(){
    var myDate = new Date();
    myNode.innerHTML = myDate.toTimeString().substring(0,8);
}
setInterval(updateTime, 1000); //calling the function every 1000 miliseconds
updateTime() //it calls it straight away
//END
})()
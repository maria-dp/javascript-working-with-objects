(function(){
//IIFE start- immedately invoqued fucntion expression
console.info('Hello')
var myNode = document.createElement('div');
document.getElementById('digitalClock').appendChild(myNode);

var updateTime = function(){
    var myDate = new Date();
    myNode.innerHTML = myDate.toTimeString().substring(0,8);
    //analogue clock:
    var seconds = myDate.getSeconds();
    var rotSeconds = (seconds * 6) - 90; //business logic:converting seconds into degrees: multiply by 6. Substract 90 to correct, it starts horizontally
    document.getElementById("secondHand").style.transform = 'rotate('+rotSeconds+'deg)'; //concatinate
    var minutes = myDate.getMinutes();
    var rotMinutes = (minutes * 6) - 90; 
    document.getElementById("minHand").style.transform = 'rotate('+rotMinutes+'deg)';
    var hours = myDate.getHours();
    hours = hours + minutes/60; //fraction of the hour so that it moves moothly instead of jumping from one our to the next
    var rotHours = (hours * 30) - 90; 
    document.getElementById("hrHand").style.transform = 'rotate('+rotHours+'deg)';
}
setInterval(updateTime, 1000); //calling the function every 1000 miliseconds
updateTime() //it calls it straight away

document.getElementById('hrHand').style.backgroundColor="#0f0" //changes the html as an inline style

// document.getElementById("secondHand").style.transform = `rotate(${rotSeconds}deg)`; alternative way to concatinate

//END
})()
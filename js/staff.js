(function(){
//start
//testing objects and arrays:
// let myObject = {
//     name: "Maria",
//     surname:"Diome",
//     email: "myemail@something.com",
//     age: 27,
//     qualifications:{
//         gcse: true,
//         alevels: true,
//         degree: false,
//     },
//     getSurname: function(){
//         return this.surname
//     }
// }
// console.dir(myObject)
// console.info(myObject.getSurname())

// var qualifications = [
//     {
//         subject : "Maths",
//         grade : "A" 
//     },
//     {
//         subject : "English",
//         grade : "B" 
//     },
//     {
//         subject : "French",
//         grade : "C" 
//     },
//     {
//         subject : "Physics",
//         grade : "B" 
//     }
//     ];
// // for(let i=0; i<qualifications.length; i++){
// //     console.info(qualifications[i].subject)
// // } alternatively:

// // qualifications.forEach(function(element){  //for each element in qualifications: argument of function
// //     console.info(element.subject)
// // }) alternatively:

// // qualifications.forEach((element)=>{
// //     console.info(element.subject)
// // }) alternatively:

// qualifications.forEach((e)=>console.info(e.subject)) //arrow functions don't need curly brackets when there is only one line of code

// var staff = 
//     [
//         {
//             name : "Bob Smith",
//             email : "b.smith@busy.com"
//         }, 
//         {   
//             name : "Jane Johnson",
//             email : "j.johnson@busy.com" 
//         },
//         {   
//             name : "Ethan Hawkson", 
//             email : "e.hawkson@busy.com"
//         }, 
//         {   
//             name : "Julie Grant",
//             email : "j.grant@busy.com" 
//         },
//         {
//             name : "Jane Doe",
//             email : "j.doe@busy.com"
//         }
//     ]
var staff = JSON.parse(localStorage.getItem('staffList')); //parse turns strings back into arrays, we look in local storage before instead of building an empty array
    if(staff === null){
         staff = []; 
        }

var rebuildList = function(){
    document.getElementById("staffTable").innerHTML = ""; //it clears the table so it doesn't duplicate when adding new names
    staff.forEach(function(element) {
        var newStaffRow = document.createElement("tr"); //tr:row
        var newStaffName = document.createElement("td"); //td:cell
        newStaffName.innerHTML = element.name;
        var newStaffEmail = document.createElement("td"); 
        newStaffEmail.innerHTML = element.email; 
        newStaffRow.appendChild(newStaffName); 
        newStaffRow.appendChild(newStaffEmail); 
        document.getElementById('staffTable').appendChild(newStaffRow);
    });
    localStorage.setItem("staffList",JSON.stringify(staff)) //local storage only takes strings, stringify takes the array and turns it into a string
}
///localStorage: stored in local browser


if(localStorage.getItem("count") === null){ 
    localStorage.setItem("count", 1);
}else{
    localStorage.setItem("count", parseInt(localStorage.getItem("count"))+1); //convert string into integer by parsing int
}

// document.getElementById("myParagraph").addEventListener("click",(ev)=>{
//     console.info("hi i was clicked") //this function is called an event handler, it does something when the event happens, the parameter it takes is the event itself
//     console.info(ev.target) //tells us where we clicked
//     ev.target.backgroundColor= "#f00"
// })  

document.getElementById("addStaffForm").addEventListener("submit", function(ev){
    ev.preventDefault(); //it stops the defult behaviour which is to submit the form and refresh the page
    console.info("form submitted")
    let newStaffName = document.getElementById('staffName').value; 
    let newStaffEmail= document.getElementById('staffEmail').value; 
    staff.push({name: newStaffName, email: newStaffEmail}); //adds to the array
    console.dir(staff)
    rebuildList()
})
rebuildList() //prints the list again so that it stays on after refreshing

//end
})();
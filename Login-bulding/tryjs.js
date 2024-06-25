// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
let user = [
  {fname : "Aftab" , lname : "Ansari"},
  {fname : "Azim " , lname : "qureshi"},
  {fname : "Sahil" , lname : "Mujawar"},
  {fname : "Afnana" , lname : "Danish"}
    
];

let fullUser = user.map(function(element){
    return `${element.fname} ${element.lname}`;
})


console.log(fullUser);

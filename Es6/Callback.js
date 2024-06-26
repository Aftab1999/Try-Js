// function addition(x, y , callback){
//     setTimeout(() => {
//     document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
//     callback(); 
//      }, 5000); } 
//      // display() function is called just after the ending of addition() function
//     function display(){ 
//     document.write('Numbers added!'); 
//      } 
//      // Calling addition() function
//     addition(5,5,display);


// Pretend that this response is coming from the server

const students = [
    {name: "harry", subject: "Javascript"},
    {name: "Rohan", subject: "Machine learning"}
]

function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });

        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents();

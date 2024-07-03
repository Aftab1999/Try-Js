
// !Pretend that this response is coming from the server

//! using Normal functions

// const students = [
//     { name: "harry", subject: "JavaScript" },
//     { name: "Rohan", subject: "Machine Learning" }
// ]


// function enrollStudent(student) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             students.push(student);
//             console.log("Student has been enrolled");
//             const error = false;
//             if (!error) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 1000);
//     })
// }

// function getStudents() {
//     setTimeout(function () {
//         let str = "";
//         students.forEach(function (student) {
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 5000);
// }

// let newStudent = { name: "Sunny", subject: "Python" }
// enrollStudent(newStudent).then(getStudents).catch(function () {
//     console.log("Some error occured");
// });


//! using arrow functions


// Pretend that this response is coming from the server

const students = [
    { name: "Harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
];

const enrollStudent = student => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            students.push(student);
            console.log("1 Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
};

const getStudents = () => {
    setTimeout(() => {
        let str = "";
        students.forEach(student => {
            str += `${student.name} (${student.subject})\n`;
        });
        console.log("2 Students have been fetched");
        console.log("3", str);
    }, 5000);
};

let newStudent = { name: "Sunny", subject: "Python" };
enrollStudent(newStudent)
    .then(getStudents)
    .catch(() => {
        console.log("4 Some error occurred");
    });


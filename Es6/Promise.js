

// Promise: Best video on promises
// -resolve
// -reject
// -pending

// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log('Function: Your promise has been resolved')
//                 resolve();
//             }
//             else {
//                 console.log('Function: Your promise has not been resolved')
//                 reject('Sorry not fulfilled');
//             }
//         }, 2000);
//     })
// }

// func1().then(function () {
//     console.log("Harry: Thanks for resolving")
// }).catch(function (error) {
//     console.log("Harry: Very bad bro. Reason: " + error)
// })

//! example 2 

//?Fetching User Data


function fetchUserData() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = true;

            if (success) {
                const userData = {
                    id: 1,
                    name: "John",
                    email: "john@example.com"
                };

                resolve(userData);
            }
            else {
                reject('Failed to fetch user data');
            }

        }, 3000); // Simulate a network delay of 3 seconds

    });
}

fetchUserData()
    .then(user => {
        console.log("User Data:", user);
    })
    .catch(error => {
        console.log('Error:', error);
    });

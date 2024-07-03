//! Entity 1: Functions Returning Promises

// ? 1. addAsync Function

function addAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            var c = a + b;
            res(c);
        }, 1000);
    });
}

// ?2. subAsync Function

function subAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Failed");
        }, 1000);
    });
}


// ? 3. mulAsync Function

function mulAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            var c = a * b;
            res(c);
        }, 1000);
    });
}


// ---------------------------------//

// ! Entity 2: Execution Using async/await

async function init() {
    try {
        const addRes = await addAsync(10, 20); // Wait for the sum of 10 and 20
        const subRes = await subAsync(addRes, 10); // Wait for the subtraction result
        const mulRes = await mulAsync(subRes, 10); // Wait for the multiplication result
        console.log(mulRes); // Log the final result
    } catch (e) {
        console.log(e); // Handle any errors
    }
}


// ? Running the init Function


init();




// *-------------------------------------------------------------------------------------------------*//

// ! Synchronous and Asynchronous Loops



// // ? 1. Synchronous Loop

// for (var i = 0; i < 1000000000000; i++) {
//     console.log(i);
// }


// // ? 2. Asynchronous Loop

// for (var i = 0; i < 1000000000000; i++) {
//     setTimeout(() => console.log(i), 0);
// }









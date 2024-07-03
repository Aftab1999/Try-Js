// ! Entity 1: Functions for Asynchronous Operations

// *Function to add two numbers asynchronously

function addAsync(a, b, cb) {
    setTimeout(() => {
        var c = a + b;
        cb(c);
    }, 2000);
}

// *Function to subtract two numbers asynchronously

function subAsync(a, b, cb) {
    setTimeout(() => cb(a - b), 2000);
}

// *Function to multiply two numbers asynchronously

function mulAsync(a, b, cb) {
    setTimeout(() => cb(a * b), 2000);
}

//-------------------------------------------//   

// ! Entity 2: Execution and Callbacks

// * Sequential execution: add -> sub -> mul

addAsync(10, 20, res => {

    subAsync(res, 10, res2 => {

        mulAsync(res2, 10, finalRes => {

            console.log(finalRes);

        });
    });
});


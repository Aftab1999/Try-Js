// !Entity 1: Functions Returning Promises


// Function to add two numbers asynchronously and return a promise
function addAsync(a, b) {
    var p = new Promise((res, rej) => {
        setTimeout(() => res(a + b), 2000);
    });
    return p;
}

// Function to subtract two numbers asynchronously and return a promise
function subAsync(a, b) {
    var p = new Promise((res, rej) => {
        setTimeout(() => rej("failed"), 1000);
    });
    return p;
}

// Function to multiply two numbers asynchronously and return a promise
function mulAsync(a, b) {
    var p = new Promise((res, rej) => {
        setTimeout(() => res(a * b), 1000);
    });
    return p;
}


// ---------------------------------//


// !Entity 2: Execution and Promise Handling


// Example executions

// Parallel execution using Promise.all
var addPromise = addAsync(10, 20);
var subPromise = subAsync(10, 20);
var mulPromise = mulAsync(10, 20);

Promise.all([addPromise, subPromise, mulPromise])
    .then(res => console.log(res))
    .catch(e => console.log(e));

// Sequential execution chaining promises
addAsync(10, 20)
    .then(res => subAsync(res, 10))
    .then(res => mulAsync(res, 10))
    .then(res => console.log(res))
    .catch(e => console.log(e));


// !Synchronous function to add two numbers
function add(a, b) {
    a++;
    b++;

    var c = a + b;

    return c;
}

const res = add(10, 20);
console.log(res); // ? Output: 32


// !Asynchronous function to add two numbers with a delay
// !Simulates an asynchronous operation like database query or web service call

function addAsync(a, b, cb) {
    console.log('Execution started');

    setTimeout(function () {
        a++;
        b++;
        var c = a + b;
        console.log('Processed result');
        cb(c);
    }, 2000);

    console.log('Execution completed');
    return undefined;
}

function callback(res) {
    console.log('Callback:', res);
}

addAsync(10, 20, callback);

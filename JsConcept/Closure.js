// function outerFunction() {

// var outerVariable = "I am outside!";

// function innerFunction() {
// console.log(outerVariable);
// }

// return innerFunction;
// }

// var closureFunction = outerFunction();
// closureFunction(); // Output: "I am outside!"

// !-------------------------------------------------//

function greet(name) {

    return function() {
        console.log("Hello, " + name);
    }
}

var sayHello = greet("Ali");
sayHello();
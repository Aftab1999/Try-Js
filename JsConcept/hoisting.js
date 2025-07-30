
//! Example 1

// console.log(hoistingVar);

// var hoistingVar = "I am hoisting";

// // Equivalent to:

// var hoistingVar;

// console.log(hoistingVar);

// hoistingVar = " I am hoisting"


// !-----------------------------------------//

// ! Example 2

// console.log(a);
// var a = 5;

// console.log(a)

//! -------------------------------------------//

// ! Example 3

// console.log(myFunc());

// function myFunc(){
//     return "Hello from hoisted function";

// }

//! ------------------------------------------//

// ! Example 3

console.log(message);

// ? pints undefined because var message is hoisted, but its value is not set yet.

var message = "Hoisting in JS";

console.log(greet()); 

//?  prints "Hello" because function greet is hoisted with its code, so you can call it before its definition.

function greet(){
    return "Hello";
}

//! ------------------------------------------//

// ! Example 3


console.log(num);

// ? prints undefined because var num is hoisted, but its value is not set yet.

var num = 10;

try {
    console.log(val);

// ? gives an error because let val is hoisted but not initialized, so you can't use it before its line.

} catch (e) { 
    console.log("let error:", e.message);
}
let val = 20;

console.log(add(2, 3));

// ? prints 5 because the function add is hoisted with its code, so you can call it before its definition.

function add(a, b) {
    return a + b;
}
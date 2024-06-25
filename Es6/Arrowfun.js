// function sum(){
//     let a = 5; b = 6;
//     let sum = a+b;
//     return  `the sum of two number is ${sum}`;
// }
// console.log(sum());

// How to Convert in into Arrow Function  

const sum = () => 
`the sum of the two number is ${(a=5)+(b=6)}`;
console.log(sum());
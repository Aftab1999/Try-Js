// Double the Numbers:

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2);
console.log("Double the Numbers:", doubledNumbers);  // Output: [2, 4, 6, 8, 10]


// Extract Names from Objects:

let persons = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
let names = persons.map(person => person.name);
console.log("Extract Names from Objects:", names);  // Output: ['Alice', 'Bob', 'Charlie']


// Capitalize First Letter of Strings:

let fruits = ['apple', 'banana', 'cherry'];
let capitalizedFruits = fruits.map(fruit => fruit.charAt(0).toUpperCase() + fruit.slice(1));
console.log(" Capitalize First Letter of Strings:", capitalizedFruits);  // Output: ['Apple', 'Banana', 'Cherry']


// Convert Strings to Lengths:

let fruitLen = ['apple', 'banana', 'cherry'];
let fruitLengths = fruitLen.map(fruit => fruit.length);
console.log("Convert Strings to Lengths:", fruitLengths);  // Output: [5, 6, 6]


// Transform Array of Arrays:

let arrays = [[1, 2], [3, 4], [5, 6]];
let sums = arrays.map(array => array.reduce((a, b) => a + b, 0));
console.log("Transform Array of Arrays:", sums);  // Output: [3, 7, 11]





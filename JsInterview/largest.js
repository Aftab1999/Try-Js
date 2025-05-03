// Find the largest number in an array:
// Write a function that takes an array of numbers as input and
// returns the largest number in the array. For example, if the input is [3, 8, 2, 10, 5],
// the output should be 10.


const array = [5, 7, 10, 45, 8, 17,]


let Max = array[0];
let Min = array[0];

for (let i = 0; i < array.length; i++) {

    if (array[i] > Max)

        Max = array[i];


    if (array[i] < Min)
        Min = array[i];

}

console.log("Max Values is ", Max);
console.log("Min Values is", Min);





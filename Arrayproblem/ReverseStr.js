// const Reverse = str => {
//     let reverse = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }

//     console.log("String is Reverse ", reverse);


// }

// Reverse('aftab');

//!-------------------------//!





//! 2. Find the largest number in an array:
//!  Write a function that takes an array of numbers as input and returns the largest number in the array.
// !  For example, if the input is [3, 8, 2, 10, 5], the output should be 10.

//? 3, 8, 2, 10, 5],

//! have to Find the largest number on above arrays that is 10

//! Step 1: Create one array,

//? [ 3, 8, 2, 10, 5],

//! Step 2: make pointer
//? min = a[0], max=[0]

//! step 3: Run the Loop

//? for (let i = 0; i<arr.length i++);

//! step 4: handle the candition on if else 

//? if (a[i]> max) { max= a[i] min++ } else { (a[i]< max )} 

let arr = [2, 7, 8, 55, 88, 54, 89, 1];

let min = arr[0];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > max) {
        max = arr[i];
    }

    if (arr[i] < min) {
        min = arr[i];
    }

}

console.log("Max Value is :", max);
console.log("Min Value is :", min);











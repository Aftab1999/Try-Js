// Make an array
// Create one min and max variable and initialize them with the array's 0 index
// Run the loop
// Run if conditions for checking min and max
// Console log the min and max


const a = [58, 16, 23, 37, 38, 39, 44, 45, 46];

let min = a[0];
let max = a[0];

for (let i = 0; i < a.length; i++) {

  if (a[i] > max)

    max = a[i];


  if (a[i] < min)

    min = a[i];
}

console.log("Max Values is ", max);
console.log("Min Values is", min);




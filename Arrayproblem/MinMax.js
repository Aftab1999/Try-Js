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

//? Initial:
//? min = a[0] = 58
//? max = a[0] = 58

// +---+--------+-----+-----+--------------------+--------------------+
// | i | a[i]   | max | min | max update?        | min update?        |
// +---+--------+-----+-----+--------------------+--------------------+
// | 0 | 58     | 58  | 58  | -                  | -                  |
// | 1 | 16     | 58  | 16  | -                  | ✅ min = 16        |
// | 2 | 23     | 58  | 16  | -                  | -                  |
// | 3 | 37     | 58  | 16  | -                  | -                  |
// | 4 | 38     | 58  | 16  | -                  | -                  |
// | 5 | 80     | 80  | 16  | ✅ max = 80        | -                  |
// | 6 | 44     | 80  | 16  | -                  | -                  |
// | 7 | 45     | 80  | 16  | -                  | -                  |
// | 8 | 46     | 80  | 16  | -                  | -                  |
// +---+--------+-----+-----+--------------------+--------------------+

// Final Output:
// Max Value is 80  
// Min Value is 16





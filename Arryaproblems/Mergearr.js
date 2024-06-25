// Create two arrays 'a' and 'b'
// Create a new array 'c' with length equal to sum of 'a' and 'b' lengths
// Initialize a counter 'ci' to 0
// Loop through array 'a':
// Copy each element to 'c'
// Increment 'ci'
// Loop through array 'b':
// Copy each element to 'c'
// Increment 'ci'
// Console log the resulting array 'c'


const a = [1, 2, 3];
const b = [4, 6, 66, 23, 77];

const c = new Array(a.length + b.length);

let ci = 0;

for (let i = 0; i < a.length; i++) {
  c[ci] = a[i];
  ci++;
}

for (let i = 0; i < b.length; i++) {
  c[ci] = b[i];
  ci++;
}

console.log(c);
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


// ?Initial:
// ?a = [1, 2, 3]
// ?b = [4, 6, 66, 23, 77]
// ?c = [ , , , , , , , , ] // length = 8

// +-------+--------+-----+---------------------------+
// | Step  | Source | ci  | c after insertion         |
// +-------+--------+-----+---------------------------+
// | 0     | a[0]=1 | 0   | [1,  ,  ,  ,  ,  ,  ,  ,  ] |
// | 1     | a[1]=2 | 1   | [1, 2,  ,  ,  ,  ,  ,  ,  ] |
// | 2     | a[2]=3 | 2   | [1, 2, 3,  ,  ,  ,  ,  ,  ] |
// | 3     | b[0]=4 | 3   | [1, 2, 3, 4,  ,  ,  ,  ,  ] |
// | 4     | b[1]=6 | 4   | [1, 2, 3, 4, 6,  ,  ,  ,  ] |
// | 5     | b[2]=66| 5   | [1, 2, 3, 4, 6, 66,  ,  ,  ] |
// | 6     | b[3]=23| 6   | [1, 2, 3, 4, 6, 66, 23,  ,  ] |
// | 7     | b[4]=77| 7   | [1, 2, 3, 4, 6, 66, 23, 77] |
// +-------+--------+-----+---------------------------+

// !Final Output: [1, 2, 3, 4, 6, 66, 23, 77]

const arr = [1, 2, [3, 4], 5, [6, 7]];
let flatArr = [];

for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) { // [3,4]

        for (let j = 0; j < arr[i].length; j++) {
            flatArr.push(arr[i][j]);
        }
        
    } else {
        flatArr.push(arr[i]);
    }

}

console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6, 7]


// ? flatArr = []

// +---+------------+------------------+-----------------------------+----------------------+
// | i | arr[i]     | Is Array?        | Operation                   | flatArr after step   |
// +---+------------+------------------+-----------------------------+----------------------+
// | 0 | 1          | ❌ No            | flatArr.push(1)             | [1]                  |
// | 1 | 2          | ❌ No            | flatArr.push(2)             | [1, 2]               |
// | 2 | [3, 4]     | ✅ Yes           | push 3, push 4 (nested loop)| [1, 2, 3, 4]         |
// | 3 | 5          | ❌ No            | flatArr.push(5)             | [1, 2, 3, 4, 5]      |
// | 4 | [6, 7]     | ✅ Yes           | push 6, push 7 (nested loop)| [1, 2, 3, 4, 5, 6, 7]|
// +---+------------+------------------+-----------------------------+----------------------+

//! ✅ Final Output:
// !flatArr = [1, 2, 3, 4, 5, 6, 7]

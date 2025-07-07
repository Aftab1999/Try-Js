//! 1. Find How Many Pairs Have Sum Equal to Given Number

function countPairs(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        // slice creates a sub-array from i+1 to end
        const rest = arr.slice(i + 1);

        for (let j = 0; j < rest.length; j++) {
            if (arr[i] + rest[j] === target) {
                count++;
            }
        }
    }

    return count;
}


const arr = [1, 5, 7, -1, 5];
const target = 6;

console.log("Total pairs:", countPairs(arr, target)); // 3


// ? arr = [1, 5, 7, -1, 5], target = 6

// +---+--------+-------------------+-----------------------------+-------------+-------------------+
// | i | arr[i] | rest              | Pairs Checked              | Sum         | Count if sum == 6 |
// +---+--------+-------------------+-----------------------------+-------------+-------------------+
// | 0 |   1    | [5, 7, -1, 5]     | (1,5), (1,7), (1,-1), (1,5) | 6, 8, 0, 6   | +1, -, -, +1      |
// | 1 |   5    | [7, -1, 5]        | (5,7), (5,-1), (5,5)        | 12, 4, 10    | -, -, -           |
// | 2 |   7    | [-1, 5]           | (7,-1), (7,5)               | 6, 12        | +1, -             |
// | 3 |  -1    | [5]               | (-1,5)                      | 4            | -                 |
// | 4 |   5    | []                |                             |              |                   |
// +---+--------+-------------------+-----------------------------+-------------+-------------------+

// ?Total pairs found: 3


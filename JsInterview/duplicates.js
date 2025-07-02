// ! Remove duplicates from an array: Write a function that takes an array as input and returns a new array
// ! with duplicate elements removed. For example, if the input is [1, 2, 2, 3, 4, 4, 5], 
// !the output should be [1, 2, 3, 4, 5].


// const removeDuplicates = (arr) =>

//     arr.filter((item, index) => arr.indexOf(item) === index);

// const inputArray = [1, 2, 2, 4, 4, 6, 6, 8, 8, 8];

// const result = removeDuplicates(inputArray);

// console.log(result);

// !========================================================! //

// ? arr = [1, 2, 2, 4, 4, 6, 6, 8, 8, 8]

// +--------+--------+-------------------+---------------------------+
// | Index  | Value  | arr.indexOf(value)| Keep it? (index === first)|
// +--------+--------+-------------------+---------------------------+
// | 0      | 1      | 0                 | ✅ Yes                    |
// | 1      | 2      | 1                 | ✅ Yes                    |
// | 2      | 2      | 1                 | ❌ No                     |
// | 3      | 4      | 3                 | ✅ Yes                    |
// | 4      | 4      | 3                 | ❌ No                     |
// | 5      | 6      | 5                 | ✅ Yes                    |
// | 6      | 6      | 5                 | ❌ No                     |
// | 7      | 8      | 7                 | ✅ Yes                    |
// | 8      | 8      | 7                 | ❌ No                     |
// | 9      | 8      | 7                 | ❌ No                     |
// +--------+--------+-------------------+---------------------------+

// ? ✅ Final Output: [1, 2, 4, 6, 8]

// ? 🔁 Logic Recap:
// ? arr.indexOf(item) returns the first index where the item is found.

// ?.filter() checks if the current index matches that first index.

// ? Only the first occurrence is kept, others are filtered out.


// !-----------------------------------------------------------------------------------------------------------//


const removeDuplicates = (arr) => {

    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
};

const inputArray = [1, 2, 2, 3, 4, 4, 5, 7, 7, 8, 8, 9, 9];

const result = removeDuplicates(inputArray);


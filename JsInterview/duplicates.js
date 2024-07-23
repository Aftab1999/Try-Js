// Remove duplicates from an array: Write a function that takes an array as input and returns a new array with duplicate elements removed. For example, if the input is [1, 2, 2, 3, 4, 4, 5], the output should be [1, 2, 3, 4, 5].


const removeDuplicates = (arr) =>

    arr.filter((item, index) => arr.indexOf(item) === index);

const inputArray = [1, 2, 2, 4, 4, 6, 6, 8, 8, 8];

const result = removeDuplicates(inputArray);

console.log(result);

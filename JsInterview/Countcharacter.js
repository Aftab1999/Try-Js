// ! Count the occurrences of a character in a string: Write a function that takes a string and a character as input and returns the number of times the character appears in the string. For example, if the input is "hello", and "l" the output should be 2.


const count = (str, char) => {

    // ? Split the string into an array of characters and filter the array to include only the target character

    const occurrences = str.split('').filter(c => c === char).length;

    return occurrences;
};

// Example usage
console.log(count("hello", "l")); // Output: 2
console.log(count("javascript", "a")); // Output: 2
console.log(count("mississippi", "s")); // Output: 4

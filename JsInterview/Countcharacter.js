// ! Count the occurrences of a character in a string: Write a function that takes a string and a character as input and returns the number of times the character appears in the string. For example, if the input is "hello", and "l" the output should be 2.


const countCharacterOccurrences = (str, char) => {
    // ?Split the string into an array of characters and filter the array to include only the target character
    const occurrences = str.split('').filter(c => c === char).length;

    return occurrences;
};

// Example usage
console.log(countCharacterOccurrences("hello", "l")); // Output: 2
console.log(countCharacterOccurrences("javascript", "a")); // Output: 2
console.log(countCharacterOccurrences("mississippi", "s")); // Output: 4

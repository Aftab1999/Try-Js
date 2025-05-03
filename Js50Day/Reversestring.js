// Problem: Reverse the characters in a given string.
// Approach:

// Convert the string to an array using split('').

// Reverse the array using reverse().

// Join it back into a string using join('').

function reverseString(str) {

    const strArray = str.split('');
    const reversedArray = strArray.reverse();
    const reversedString = reversedArray.join('');

    return reversedString;
}

console.log(reverseString("Hello"))
console.log(reverseString("World"));

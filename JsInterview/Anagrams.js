// !7. Check for Anagrams: Write a function that takes two strings as input and checks if they are anagrams. Anagrams are two words or phrases that use the same letters in different order. For example, if the inputs are "listen" and "silent", the output should be true.

const areAnagrams = (str1, str2) => {

    // ? Normalize and sort the characters in each string

    const normalize = str => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // ? Sort and compare

    // Sort and compare
    const sortedStr1 = normalize(str1).split('').sort().join('');
    const sortedStr2 = normalize(str2).split('').sort().join('');

    return sortedStr1 === sortedStr2;


};

// Example usage
console.log(areAnagrams('listen', 'silent')); // Output: true
console.log(areAnagrams('hello', 'world'));   // Output: false
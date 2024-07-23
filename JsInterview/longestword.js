// ! Find the longest word: Write a function that takes a sentence as input and returns the longest word in the sentence. For example, if the input is "The quick brown fox jumps over the lazy dog", the output should be "Jumps".

const findLongestWord = sentence => {
    const words = sentence.split(' ');

    const longestWord = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");

    return longestWord;
};

// Example usage
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("A quick movement of the enemy will jeopardize five gunboats.")); // Output: "jeopardize"



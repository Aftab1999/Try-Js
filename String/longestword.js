// ! Find the longest word: Write a function that takes a sentence as input and returns the longest word in the sentence. For example, if the input is "The quick brown fox jumps over the lazy dog", the output should be "Jumps".

const findLongestWord = sentence => {
    const words = sentence.split(' ');

    const longestWord = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");

    return longestWord;
};


console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("A quick movement of the enemy will jeopardize five gunboats.")); // Output: "jeopardize"


//?  🧪 Example 1: "The quick brown fox jumps over the lazy dog"

// Initial split:
// words = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

// Using reduce to track the longest word:

// +--------+--------------------+--------------------+--------------------+
// | Step # | currentWord        | longest so far     | Result after step  |
// +--------+--------------------+--------------------+--------------------+
// | 1      | "The"              | ""                 | "The"              |
// | 2      | "quick"            | "The"              | "quick"            |
// | 3      | "brown"            | "quick"            | "quick"            |
// | 4      | "fox"              | "quick"            | "quick"            |
// | 5      | "jumps"            | "quick"            | "quick"            |
// | 6      | "over"             | "quick"            | "quick"            |
// | 7      | "the"              | "quick"            | "quick"            |
// | 8      | "lazy"             | "quick"            | "quick"            |
// | 9      | "dog"              | "quick"            | "quick"            |
// +--------+--------------------+--------------------+--------------------+

// ✅ Final Output: "quick"




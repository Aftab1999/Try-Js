// Write a program check if the given String is Palindrome?
// Input: S = "abba"
// Output: yes its a Palindrome if not then show message its not a Palindrome


//! arrow function

const checkPalindrome = str => {

    str = str.toLowerCase();
    let reversed = str.split('').reverse().join('');

    if (str === reversed) {
        console.log(`"${str}" is a palindrome.`);
    } else {
        console.log(`"${str}" is not a palindrome.`);
    }
};

checkPalindrome("Abba");
checkPalindrome("hello");
checkPalindrome("Madam");
checkPalindrome("racecar");






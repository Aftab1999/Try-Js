// Write a program check if the given String is Palindrome?
// Input: S = "abba"
// Output: yes its a Palindrome if not then show message its not a Palindrome

// function checkProgram() {

//     let Input = "abba";

//     let reverse = "";

//     for (let i = Input.length - 1; i >= 0; i--) {
//         reverse += Input[i];
//     }

//     console.log(reverse);

//     if (Input === reverse) {
//         return true;
//     } else {
//         return false;
//     }


// }

// console.log(checkProgram());


//!---------------------------------------------!//


// with Different Approch 


// function checkProgram() {
//     let input = "Abba"; // You can change this input to test other strings

//     let reverse = "";

//     for (let i = input.length - 1; i >= 0; i--) {
//         reverse += input[i];
//     }

//     console.log(reverse);

//     if (input.toLowerCase() === reverse.toLowerCase()) {
//         console.log("The string is a Palindrome");
//     } else {
//         console.log("The string is not a Palindrome");
//     }
// }

// checkProgram();

//!---------------------------------------------!//


// with Inbuild Function

// function isPalindrome(str) {

//     str = str.toLowerCase();
//     let reversed = str.split('').reverse().join('');

//     if (str === reversed) {
//         console.log(`"${str}" is a Palindrome`);

//     } else {
//         console.log(`"${str}" is not a Palindrome`);
//     }

// }

// console.log(isPalindrome("Abba"));

//!---------------------------------------------!//


//? arrow function

// const checkPalindrome = str => {

//     str = str.toLowerCase();

//     let reversed = str.split('').reverse().join('');

//     if (str === reversed) {
//         console.log(`"${str}" is a palindrome.`);
//     } else {
//         console.log(`"${str}" is not a palindrome.`);
//     }
// };

// checkPalindrome("Abba");
// checkPalindrome("hello");
// checkPalindrome("Madam");
// checkPalindrome("racecar");

//!---------------------------------------------!//

//? with rever using using array methods function

function Palindrom(str) {
    str = str.toLowerCase();

    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    if (str === reversed) {
        console.log(`"${str}" is a palindrome`);
    } else {
        console.log(`"${str}" is not a palindrome`);
    }
}

// Example usage:
Palindrom("Madam");
Palindrom("Hello");


// ?Step-by-step for str = "Madam"

// +-------+-------------+----------------+--------------------------+
// | Step  | str[i]      | reversed so far| i                        |
// +-------+-------------+----------------+--------------------------+
// | Init  |             | ""             | i = 4 to 0 (reverse loop)|
// | 1     | m           | "m"            | i = 4                    |
// | 2     | a           | "ma"           | i = 3                    |
// | 3     | d           | "mad"          | i = 2                    |
// | 4     | a           | "mada"         | i = 1                    |
// | 5     | m           | "madam"        | i = 0                    |
// +-------+-------------+----------------+--------------------------+

// Original str (lowercased): "madam"  
// Reversed string: "madam"  
// ✅ Result: ✅ "madam" is a palindrome











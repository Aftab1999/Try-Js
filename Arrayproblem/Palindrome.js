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


// with Different Approch 


function checkProgram() {
    let input = "Abba"; // You can change this input to test other strings

    let reverse = "";

    for (let i = input.length - 1; i >= 0; i--) {
        reverse += input[i];
    }

    console.log(reverse);

    if (input.toLowerCase() === reverse.toLowerCase()) {
        console.log("The string is a Palindrome");
    } else {
        console.log("The string is not a Palindrome");
    }
}

checkProgram();


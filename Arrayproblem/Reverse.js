// function reverseString() {
//     const str = prompt("Enter a string:");
//     let reversed = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }

//     return reversed;
//   }

//   const reversedString = reverseString();
//   console.log(reversedString);


// If user Enter a string Like Aftab
//          A [0] f[1] t[2] a[3] b[4]

//  reversed [batfa]


//! --------------------------------------//

// function reverseString() {

//   const reversearr = ["I am learning JavaScript"];
//   let reversed = '';

//   for (let i = reversearr.length - 1; i >= 0; i--) {
//     reversed += reversearr[i];
//   }

//   return reversed;

// }

// const reversedString = reverseString();

// console.log(reversedString);

//! --------------------------------------//

function reverseSentence(sentence) {

  return sentence.split(' ').reverse().join(' ');
}


const input = "I am learning JavaScript";
const result = reverseSentence(input);
console.log("Reversed sentence:", result);



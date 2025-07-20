// Using for loop

// function reverseString() {
//   const reversearr = ["h", "e", "l", "l", "o"];
//   const reversedArr = [];

 
//   for (let i = reversearr.length - 1; i >= 0; i--) {
//     reversedArr.push(reversearr[i]);
//   }

//   return reversedArr;
// }

// const reversedString = reverseString();

// console.log(reversedString); 

// !----------------------------------------------//

// Using 2 Pointer 

function reverseString() {

  const reverseArr =  ["h", "e", "l", "l", "o"];
  let left = 0;
  let right = reverseArr.length - 1;

  while(left < right) {

    // swap element
    const temp = reverseArr[left]; // temp have left(h) now left is empty
    reverseArr[left] = reverseArr[right]; // left have a right now right is empty
    reverseArr[right] = temp;

    left++;
    right--;

  }

  return reverseArr


}


const reversedString = reverseString();

console.log(reversedString)


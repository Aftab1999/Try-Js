// ? 4. FizzBuzz: Write a program that prints the numbers from 1 to 100.
// ! But for multiples of three, print "Fizz" instead of the number,
//  ! and for the multiples of five, print "Buzz". For numbers that
//  ! are multiples of both three and five, print "FizzBuzz".


//? 1, 2 Fizz, 4, Buzz, Fizz, 7 , 8, Fizz , FizzBuzz, 11

//? take a number n 

//? number less than equal to 100

//? for( i = 1 ; i <= 100; i++)

//?  if (i % 3 === 0) { console.log("Fizz"); }




// for (let i = 1; i <= 100; i++) {             // Loop from 1 to 100

//     if (i % 3 === 0 && i % 5 === 0) {        // Check if the number is divisible by both 3 and 5
//         console.log("FizzBuzz");             // Print "FizzBuzz" if true

//     } else if (i % 3 === 0) {                // If the previous condition is false, check if the number is divisible by 3
//         console.log("Fizz");                 // Print "Fizz" if true

//     } else if (i % 5 === 0) {                // If both previous conditions are false, check if the number is divisible by 5
//         console.log("Buzz");                 // Print "Buzz" if true

//     } else {                                 // If all previous conditions are false
//         console.log(i);                      // Print the number itself
//     }
// }

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz")

    } else if (i % 3 === 0) {

        console.log("FIZZ")

    } else if (i % 5 === 0) {

        console.log("Buzz")

    } else {
        console.log(i)
    }
}



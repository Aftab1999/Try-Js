// !program to remove duplicate value from an array

function removeDuplicate(arr) {

    let uniqueArr = []; // Empty Array

    for (let i = 0; i < arr.length; i++) { // 1 2 3 2

        if (uniqueArr.indexOf(arr[i]) === -1) { // 1 2 3    
            uniqueArr.push(arr[i]); // 1 2 3

        }
    }
    console.log(uniqueArr);
}

const Array = [1, 2, 3, 2, 3]
removeDuplicate(Array);
const Arr = [4,7,9,3,6,8,4,6,3];

let largest = -Infinity; // 4

let SecondLargest = -Infinity; 

for(let i = 0; i< Arr.length; i++){

    if (Arr[i] > largest){
        SecondLargest = largest; 
        largest = Arr[i] 

    } else if (Arr[i] > SecondLargest && Arr[i] !== largest){
        SecondLargest = Arr[i]
    }


}

console.log("Second Largest Number is ", SecondLargest);



// | i (index) | Arr\[i] | largest (before) | SecondLargest (before) | Condition Check   | largest (after) | SecondLargest (after) |
// | --------- | ------- | ---------------- | ---------------------- | ----------------- | --------------- | --------------------- |
// | 0         | 4       | -∞               | -∞                     | 4 > -∞ ✅          | 4               | -∞                    |
// | 1         | 7       | 4                | -∞                     | 7 > 4 ✅           | 7               | 4                     |
// | 2         | 9       | 7                | 4                      | 9 > 7 ✅           | 9               | 7                     |
// | 3         | 3       | 9                | 7                      | 3 > 7 ❌           | 9               | 7                     |
// | 4         | 6       | 9                | 7                      | 6 > 7 ❌           | 9               | 7                     |
// | 5         | 8       | 9                | 7                      | 8 > 7 ✅ (else-if) | 9               | 8                     |
// | 6         | 4       | 9                | 8                      | 4 > 8 ❌           | 9               | 8                     |
// | 7         | 6       | 9                | 8                      | 6 > 8 ❌           | 9               | 8                     |
// | 8         | 3       | 9                | 8                      | 3 > 8 ❌           | 9               | 8                     |



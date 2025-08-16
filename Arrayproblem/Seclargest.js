const Arr = [4,7,9,3,6,8,4,6,3];

let largest = -Infinity; // 9

let SecondLargest = -Infinity; // 9

for(let i = 0; i< Arr.length; i++){

    if (Arr[i] > largest){
        SecondLargest = largest;
        largest = Arr[i]

    } else if (Arr[i] > SecondLargest && Arr[i] !== largest){
        SecondLargest = Arr[i]
    }


}

console.log("Second Largest Number is ", SecondLargest);


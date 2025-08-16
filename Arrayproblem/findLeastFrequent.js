function findLeastFrequent(arr){

let  minNum = arr[0];
let minCount  = arr.length;

for(let i = 0; i<arr.length; i++){

    let count = 0;
    
    for(let j = 0; j<arr.length; j++){
        if(arr[i]=== arr[j]){
            count++;
        }

    }

    if(count < minCount ){
        minCount  = count;
        minNum = arr[i];
    }
}

  console.log(minNum + " came " + minCount + " times");

}

const numbers = [1, 1, 6, 6, 6, 4, 4, 4, 9, 9, 9, 9];
findLeastFrequent(numbers);


// j   arr[j]   compare (arr[j] === fixed)   match?   count
// 0     1            1 === 1                 ✅        1
// 1     1            1 === 1                 ✅        2
// 2     6            6 === 1                 ❌        2
// 3     6            6 === 1                 ❌        2
// 4     6            6 === 1                 ❌        2
// 5     4            4 === 1                 ❌        2
// 6     4            4 === 1                 ❌        2
// 7     4            4 === 1                 ❌        2
// 8     9            9 === 1                 ❌        2
// 9     9            9 === 1                 ❌        2
// 10    9            9 === 1                 ❌        2
// 11    9            9 === 1                 ❌        2

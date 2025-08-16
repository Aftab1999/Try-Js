function twoSum(numbers, target) {
 const seen = {} ; // {2,0}

 for(let i = 0; i<numbers.length; i++){ 
    const needed = target -  numbers[i]; // 9 - 7 = 2

    if(seen[needed] !== undefined){ 
        return [seen[needed], i];
    }
    seen[numbers[i]] =i;

 }

 return[];

}

// Example:
const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(numbers, target)); // [0, 1]
function countPairs(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        // slice creates a sub-array from i+1 to end
        const rest = arr.slice(i + 1);

        for (let j = 0; j < rest.length; j++) {
            if (arr[i] + rest[j] === target) {
                count++;
            }
        }
    }

    return count;
}

// Example
const arr = [1, 5, 7, -1, 5];
const target = 6;

console.log("Total pairs:", countPairs(arr, target)); // 3

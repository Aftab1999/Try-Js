function twoSum(numbers, target) {
  const seen = {};

  for (let i = 0; i < numbers.length; i++) {
    const needed = target - numbers[i];
    if (seen[needed] !== undefined) {
      return [seen[needed], i];
    }
    seen[numbers[i]] = i;
  }

  return [];
}

// Example:
const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(numbers, target)); // [0, 1]



// | i (loop index) | numbers\[i] | target - numbers\[i] (`needed`) | seen object before check | seen\[needed] | Condition (`!== undefined`)? | Action                      |
// | -------------- | ----------- | ------------------------------- | ------------------------ | ------------- | ---------------------------- | --------------------------- |
// | 0              | 2           | 9 - 2 = **7**                   | `{}`                     | undefined     | ❌ (undefined)                | Add `seen[2] = 0` → `{2:0}` |
// | 1              | 7           | 9 - 7 = **2**                   | `{2:0}`                  | 0             | ✅ (not undefined)            | Return `[0, 1]`             |


var functionScopedVar = "I am function-scoped!";
let blockScopedVar = "I am block-scoped!";
const constantVar = "I am a constant!";
if (true) {
var functionScopedVar = "I am still function-scoped!";
let blockScopedVar = "I am still block-scoped!";
const constantVar = "I cannot be reassigned!"; // Would throw an error
}
console.log(functionScopedVar); // Output: "I am still function-scoped!"
console.log(blockScopedVar); // Output: "I am block-scoped!"
console.log(constantVar); // Output: "I am a constant!"
// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//ANSWER:
// The 'cityOfBirth' was not assigned before the console.log statement
// Solution will be to switch the lines as shown below:


const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
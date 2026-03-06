// Predict and explain first...

// =============> write your prediction here. It may likely have issues as console.log() is within function implementation, instead of using'return'

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here. Instead of having console.log() is within function implementation, it should be replaced with 'return'

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return (a * b);
}
// Predict and explain first...
//  =============> write your prediction here. An error will result becasue of the ';' between return and a + b


function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here. The ideal statement should be 'return a + b; ' but this statement is separated by ';'
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
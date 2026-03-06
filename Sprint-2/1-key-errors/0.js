// Predict and explain first...
//  =============> Prediction: The function capitalise is possibly meant to capitalise the first letter in a string.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> =============> write your explanation here
// The 'str' variable on the left hand side is the same used in the function name implementation which should not be.
// =============> write your new code here
function capitalise(str) {
  let capFunction = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capFunction;
}
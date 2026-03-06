
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here. The error is likely to be caused by square(3), '3' is supposed to be replaced by a string representing the number.

function square(3) {
    return num * num;
}

// =============> write the error message here
// function square(3) {
//                 ^
//  SyntaxError: Unexpected number
// =============> explain this error message here
// The muber '3' should be used when calling the function and it should not be used as a parameter.
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}


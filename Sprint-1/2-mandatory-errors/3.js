const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//Predcition: slice() probably only work on string. Possible solution will be to put cardNumber in quotes or use String()
// Why does it give this error? It says 'cardNumber.slice is not a function'
// Is this what I predicted? No
// If not, what's different? Since cardNumber is numeric, it shoulf be changed to string fot slice() to work.

const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);

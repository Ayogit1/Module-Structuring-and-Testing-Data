let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//ANSWER: Four function calls. Two function calls in line 4 & two function calls in line 5
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//ANSWER: The comma in the replaceAll() function in Line 5 is missing. Put the comma back in to fix it.
// c) Identify all the lines that are variable reassignment statements
//ANSWER: Lines that are variable reassignment statements are Lines 4 & 5.
// d) Identify all the lines that are variable declarations
//ANSWER: Variable declarations line: 1,2,7,& 8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//ANSWER: The expression first removes the comma(,) in carPrice and then converts it to a number.
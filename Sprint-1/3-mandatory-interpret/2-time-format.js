const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//ANSWER: There were six variable declarations
// b) How many function calls are there?
//ANSWER: There were  no function calls except for the log() function
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//ANSWER: The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//ANSWER: Line 4 with find the remainder whenmovieLength is divided by 60 and assigns the remainder to remainingSeconds (24)
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//ANSWER: The variable result represents the total lenth of the movie which shows the total hours, minutes and seconds remain in string format.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//ANSWER: The code semed to  work for all values of movieLength.
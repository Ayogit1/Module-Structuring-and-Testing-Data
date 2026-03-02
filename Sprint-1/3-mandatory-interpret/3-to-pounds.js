const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. Lines 3 to 6: extracts "399" as a string and assigns the values to penceStringWithoutTrailingP.
//    It uses the substring to extract from position 0 to 3.
// 3. Line 8: padStart is used to pad the values in penceStringWithoutTrailingP with "0" from the start of the value to make up a length of 3.
//    Since penceStringWithoutTrailingP already has "399" with a length of 3, no padding is done.
// 4. Line 9 to 12: substring is used to extract from paddedPenceNumberString,  starting from position 0 to 1 giving 3 which is stored in the variable pounds.
// 5. Line 14 to 16: substring is used to extract from paddedPenceNumberString, starting from position 1 to the end givin "99"
//    "99" is padded with "0" from the end of the value to make a length of 2 but sincw "99" already has a length of 2, no padding is done.
//    "99" is assigned to the variable pence.
// 6. Line 18: uses console.log() to print the values of pounds and pence preceeded by "£" and separated by "." to give "£3.99"

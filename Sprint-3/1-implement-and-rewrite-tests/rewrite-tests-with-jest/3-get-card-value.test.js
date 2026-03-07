// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)

test("Should return 2–10 for their respective card values", () => {
  const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  cards.forEach(card => {
    expect(getCardValue(card)).toEqual(Number(card));
  });
});

//   Face Cards (J, Q, K)
test("Should return 2–10 for their respective card values", () => {
  const cards = ["J", "Q", "K"];
  cards.forEach(card => {
    expect(getCardValue(card)).toEqual(10);
  });
});

//   Invalid Cards

test("Should return invalid for their respective card values", () => {
  const cards = ["L", "M", "N"];
  cards.forEach(card => {
    expect(getCardValue(card)).toEqual(Number("Invalid"));

  });
});



// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror


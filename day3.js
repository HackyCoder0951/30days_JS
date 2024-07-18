"use strict";

/* Day 3 - Control Structures */

// Activity 1 : If-Else Statements
console.log("Activity 1 : If-Else Statements :- ");
// Task 01 - WAP to check if a number is positive, negative, or zero and log the results.

let Num = 50;
if (Num > 0) {
  console.log(`The Number ${Num} is Positive\n`);
} else if (Num < 0) {
  console.log(`The Number ${Num} is Negative\n`);
} else {
  console.log(`The Number ${Num} is Zero\n`);
}

// Task 02 - WAP to check if a person is eligible to vote ( age > = 18) and log the results.

let age = 10;
if (age >= 18) {
  console.log(`The Person is Eligible to Vote\n`);
} else {
  console.log(`The Person is not Eligible to Vote\n`);
}

// Activity 2 : Nested If-Else Statements
console.log("Activity 2 : Nested If-Else Statements :- \n");
// Task 03 - WAP to find the largest three numbers using nested if-else statements.

let largest,
  a = 40,
  b = 50,
  c = -56;
if (a >= b) {
  if (a >= c) {
    largest = a;
  } else {
    largest = c;
  }
} else {
  if (b >= c) {
    largest = b;
  } else {
    largest = c;
  }
  console.log(`Largest Number among ${a}, ${b}, ${c} is ${largest}\n`);
}

// Activity 3 : Switch Case Statements
console.log("Activity 3 : Switch Case Statements :- ");
// Task 04 - WAP that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

// Task 05 - WAP that uses a switch case to assign a grade ('A','B','C','D','F') based on score and log the grade to the console.

// Activity 4 : Conditional(Ternary) Operator
console.log("Activity 4 : Conditional(Ternary) Operator :- ");
// Task 06 - WAP that uses the ternary operator to check if a number is even or odd and log the results.

// Activity 5 : Combining Conditions
console.log("Activity 5 : Combining Conditions :- ");
// Task 07 - WAP to check if a year is a leap year using multiple conditions ( divisible by 4, but not 100 unless also divisible by 400) and log the results.

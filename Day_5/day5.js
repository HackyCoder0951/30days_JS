'use strict';

/* Day 5 - Functions */

// Activity 1 : Function Declaration
console.log("Activity 1 : Function Declaration :- ");
// Task 01 - WAF to check if a number is even or odd and log the results.
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`The Given Number ${number} is even.`);
    } else {
        console.log(`The Given Number ${number} is odd.`);
    }
}
checkEvenOrOdd(4);
checkEvenOrOdd(-57);

// Task 02 - WAF to calculate the square of a number and log the results.
function calculateSquare(number) {
    const Square = number * number ;
    console.log(`The Square of Given Number ${Square}`);
}
calculateSquare(5);
calculateSquare(8); 

// Activity 2 : Function Expression
console.log("Activity 2 : Function Expression :- ");
// Task 03 - WAF expression to find the maximum of two numbers and log the result to the console.
const findMax = function(num1,num2){
    const max = (num1 >= num2) ? num1 : num2;
    console.log(`The Maximum of ${num1} and ${num2} is ${max}.`);
}
findMax(34,56);
findMax(34,49);

// Task 04 - WAF expression to concatenate two strings and return the results.
const concatenateString = function(str1,str2) {
    return str1 + str2;
}
let result1 = concatenateString("Hello, ", "World!");
console.log(result1);
let result2 = concatenateString("Good ", "Morning!");
console.log(result2);
let result3 = concatenateString("Jignesh ", "Ameta");
console.log(result3);

// Activity 3 : Arrow Function
console.log("Activity 3 : Arrow Function :- ");
// Task 05 - WAAF to calculate the sum of two numbers and log the results.
// Task 06 - WAAF to check if a strings contains a specific character and return a boolean value.

// Activity 4 : Function Parameters and Default Values
console.log("Activity 4 : Function Parameters and Default Values :- ");
// Task 07 - WAF that takes two parameters and returns their product. Provide a default value for the second parameter.
// Task 08 - WAF that takes a person's name and age and returns a greeting message. Provide a default value for the age.
- 


// Activity 5 : Higher-Order Function
console.log("Activity 5 : Higher-Order Function :- ");
// Task 09 - WAF higher-order function that takes a function and a number, and calls the functions that many times.
// Task 10 - WAF higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
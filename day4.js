"use strict";

/* Day 4 - Loops */
// Activity 1 : For Loop
console.log("\nActivity 1 : For Loop :- \n");
// Task 01 - WAP to print numbers from 1 to 10 using a for loop
console.log("Task 1 - The Numbers from 1 to 10 :- \n");
for (let i = 1; i <= 10; i++) {
    console.log(`${i}`);
}
// Task 02 - WAP to print the multiplication table of 5 using a for loop\
console.log("\nTask 2 - The Table of 5 :- \n");
for (let j = 1; j <= 10; j++) {
    console.log(`5 * ${j} = ${5 * j}`);
}

// Activity 2 : While Loop
console.log("\nActivity 2 : While Loop :- ");
// Task 03 - WAP to calculate the sum of numbers from 1 to 10 using while loop
console.log("\nTask 3 - The Sum of Numbers from 1 to 10 :- \n");
let Num = 1;
let Sum = 0;
while (Num <= 10){
    Sum += Num;
    Num++;
}
console.log(`The Sum of Numbers from 1 to 10 is : ${Sum}`);

// Task 04 - WAP to print numbers from 10 to 1 using a while loop
console.log("\nTask 4 - Print numbers from 10 to 1 :- ");
let k = 10;
while (k >= 1){
    console.log(`${k}`);
    k--;
}

// Activity 3 : Do...While Loop
console.log("\nActivity 3 : Do...While Loop :- \n");
// Task 05 - WAP to print numbers from 1 to 5 using a do...while loop

// Task 06 - WAP to calculate the factorial of a number using a do...while loop

// Activity 4 : Nested Loops
console.log("\nActivity 4 : Nested Loops :- \n");
// Task 07 - WAP to print a pattern using nested for loop

// Activity 5 : Loop Control Statement
console.log("\nActivity 5 : Loop Control Statement :- \n");
// Task 08 - WAP to print numbers from 1 to 10, but skip the number 5 using the continue statement

// Task 09 - WAP to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement
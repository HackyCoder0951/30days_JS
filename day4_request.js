'use strict';
// Request 1 - WAS that prints numbers from 1 to 10 using a for loop and a while loop.
const Req1 = "\nRequest 1 Output :-";
console.log(Req1); 
console.log("\nUsing For Loop :- \n");
for (let i = 1; i <= 10; i++) {
    console.log(`${i}`);
}
console.log("\nUsing While Loop :- \n");
let i = 1;
while(i <= 10) {
    console.log(`${i}`);
    i++;
}

// Request 2 - WAS that prints multiplication table of 5 using a for loop.
const Req2 = "\nRequest 2 Output :-";
console.log(Req2); 
console.log("\nThe Table of 5 :- \n");
for (let j = 1; j <= 10; j++) {
    console.log(`5 * ${j} = ${5 * j}`);
}

// Request 3 - WAS that prints a pattern of stars using nested loops.
const Req3 = "\nRequest 3 Output :-";
console.log(Req3); 
console.log("\nPrint a pattern using nested for loop :- \n");
const rows = 5;
for (let i = 0; i < rows; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
        str += "*";
    }
    console.log(`${str}`);
}

// Request 4 - WAS that calculates the sum of numbers from 1 to 10 using a while loop.
const Req4 = "\nRequest 4 Output :-";
console.log(Req4); 
let Num = 1;
let Sum = 0;
while (Num <= 10){
    Sum += Num;
    Num++;
}
console.log(`\nThe Sum of Numbers from 1 to 10 is : ${Sum}`);

// Request 5 - WAS that calculates the factorial of a number using a do...while loop.


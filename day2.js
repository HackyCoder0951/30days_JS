'use strict';
// Activity 1 : Arithmetic Operations
console.log("Activity 1 - Arithmetic Operators :- ");
// Task 01 - WAP to Add Number & Log the result

let addA = 40, addB = 50, sum;
sum = addA + addB;
console.log(`Addition of A & B is : ${sum}`);

// Task 02 - WAP to Subtract Number & Log the result

let subA = 40, subB = 70, sub;
sub = subA - subB;
console.log(`Substraction of A & B is : ${sub}`);

// Task 03 - WAP to Multiply Number & Log the result

let mulA = 50, mulB = 50, mul;
mul = mulA * mulB;
console.log(`Multiply of A & B is : ${mul}`);

// Task 04 - WAP to Divide Number & Log the result

let divA = 40, divB = 4, div;
div = divA / divB;
console.log(`Division of A & B is : ${div}`);

// Task 05 - WAP to Find the remainder of Number & Log the result

let remA = 40, remB = 45, rem;
rem = remA % remB;
console.log(`Remainder of A & B is : ${rem}\n`);

// Activity 2 - Assignment Operators
console.log("Activity 2 - Assignment Operators :- ");
// Task 06 - User the `+=` operator to add number & log the result

let asSumA = 50, asSumB = 60;
console.log(`Value for Sum of A is : ${asSumA} | Value for Sum of B is : ${asSumB} `);
asSumA += 45, asSumB += 56;
console.log(`Assignment += of A is : ${asSumA} | Assignment += of B is : ${asSumB}`);

// Task 07 - User the `-=` operator to add number & log the result

let asSubA = 60, asSubB = 50;
console.log(`Value for Sub of A is : ${asSubA} | Value for Sub of B is : ${asSubB} `);
asSubA -= 45, asSubB -= 34;
console.log(`Assignment -= of A is : ${asSubA} | Assignment -= of B is : ${asSubB}\n`);

// Activity 3 - Comparison Operators
console.log("Activity 3 - Comparison Operators :- ");
// Task 08 - WAP to Compare two numbers using > and < & log the results

let LessThenA = 50, LessThenB = 56, LessThen;
LessThen = LessThenA < LessThenB;
console.log(`Comparison of ${LessThenA} < ${LessThenB} is : ${LessThen}`);
LessThen = LessThenA > LessThenB;
console.log(`Comparison of ${LessThenA} > ${LessThenB} is : ${LessThen}`);

// Task 09 - WAP to Compare two numbers using >= and <= & log the results

let LessEqualA = 400,LessEqualB = 70, LessEqual;
LessEqual = LessEqualA <= LessEqualB;
console.log(`Comparison of ${LessEqualA} <= ${LessEqualB} is : ${LessEqual}`);
LessEqual = LessEqualA >= LessEqualB;
console.log(`Comparison of ${LessEqualA} >= ${LessEqualB} is : ${LessEqual}`);

// Task 10 - WAP to Compare two numbers using == and === & log the results

let EqualityA = 40,EqualityB = 50, Equality;
Equality = EqualityA == EqualityB;
console.log(`Strict Equality Check of ${EqualityA} == ${EqualityB} is : ${Equality}`);
Equality = EqualityA === EqualityB;
console.log(`Non Strict Equality Check of ${EqualityA} === ${EqualityB} is : ${Equality}\n`);

// Activity 4 - Logical Operators
console.log("Activity 4 - Logical Operators :- ");
// Task 11 - WAP to use && operator to combine two conditions and log the result

let LogicalAndA = 40, LogicalAndB = 567, LogicalAnd;
LogicalAnd = LogicalAndA > LogicalAndB && LogicalAndA < LogicalAndB;
console.log(`LogicalAnd && Check of ${LogicalAndA} > ${LogicalAndB} && ${LogicalAndA} == ${LogicalAndB} is : ${LogicalAnd}`);

// Task 12 - WAP to use || operator to combine two conditions and log the result

let LogicalORA = 40, LogicalORB = 50, LogicalOR;
LogicalOR = LogicalORA < LogicalORB || LogicalORA > LogicalORB;
console.log(`LogicalOR || Check of ${LogicalORA} || ${LogicalORB} is : ${LogicalOR}`);

// Task 13 - WAP to use ! operator to combine two conditions and log the result

let LogicalNotA = 40, LogicalNotB = 50, LogicalNot;
LogicalNot = !LogicalNotA || !LogicalNotB;
console.log(`LogicalNot ! Check of !${LogicalNotA} || !${LogicalNotB} is : ${LogicalNot}\n`);

// Activity 5 - Ternary Operators
console.log("Activity 5 - Ternary Operators :- ");
// Task 14 - WAP that uses ternary operator to check if a number is positive or negative and log the result to the console

let TernaryNum = 50 , Ternary;
Ternary = (TernaryNum > 0 ) ? "positive" : (TernaryNum < 0 ) ? "negative" : "zero";
console.log(`The Number is ${TernaryNum} is ${Ternary}`);



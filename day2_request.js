'use strict';
// Request 1 - Write a script that performs the basic arithmetic operations on two numbers and logs the results.
const Req1 = "\nRequest 1 Output :- \n";
console.log(Req1); 

let Num1 = 4.90, Num2 = 50;
let Add, Sub, Mul, Div, Rem, Result;

// Addition
Add = Num1 + Num2;
console.log(`Addition       of ${Num1} and ${Num2} is : ${Add}`);

// Substraction
Sub = Num1 - Num2;
console.log(`Substration    of ${Num1} and ${Num2} is : ${Sub}`);

// Multiplication
Mul = Num1 * Num2;
console.log(`Multiplication of ${Num1} and ${Num2} is : ${Mul}`);

// Division
Div = Num1 / Num2;
console.log(`Division       of ${Num1} and ${Num2} is : ${Div}`);

// Remainder
Rem = Num1 % Num2;
console.log(`Remainder      of ${Num1} and ${Num2} is : ${Rem}\n`);


// Request 2 - Write a script that performs the Comparision & Logical Operation on two numbers and logs the results.
const Req2 = "Request 2 Output :- \n";
console.log(Req2); 

let num1, num2;
let LessThen, GreaterThen, LessEqual, GreaterEqual, EqualityCheck;
let LogicalAnd, LogicalOR, LogicalNot;

// Comparision Operations
LessThen = num1 < num2;
console.log(`Comparison of ${num1} < ${num2} is : ${LessThen}`);

GreaterThen = num1 > num2;
console.log(`Comparison of ${num1} > ${num2} is : ${GreaterThen}`);

LessEqual = num1 <= num2;
console.log(`Comparison of  ${num1} <= ${num2} is : ${LessEqual}`);

GreaterEqual = num1 >= num2;
console.log(`Comparison of  ${num1} >= ${num2} is : ${GreaterThen}\n`);

EqualityCheck = num1 == num2;
console.log(`Strict Equality Check of ${num1} == ${num2} is : ${EqualityCheck}`);

EqualityCheck = num1 === num2;
console.log(`Non Strict Equality Check of ${num1} === ${num2} is : ${EqualityCheck}\n`);

// Logical Operations
LogicalAnd = num1 < num2 && num1 > num2;
console.log(`LogicalAnd && Check of ${num1} > ${num2} && ${num1} == ${num2} is : ${LogicalAnd}`);

LogicalOR = num1 < num2 || num1 > num2;
console.log(`LogicalOR || Check of ${num1} < ${num2} || ${num1} > ${num2}is : ${LogicalOR}`);

LogicalNot = !num1 || !num2;
console.log(`LogicalNot ! Check of !${num1} || !${num2} is : ${LogicalNot}\n`);

// Request 3 - Write a script that uses the Ternary Operator to check if a number is positive or negative and logs the results.
const Req3 = "Request 3 Output :- \n";
console.log(Req3); 

let Num = 50, Ternary;

// Ternary Operator
Ternary = (Num > 0 ) ? "positive" : (Num < 0 ) ? "negative" : "zero";
console.log(`The Number is ${Num} is ${Ternary}`);
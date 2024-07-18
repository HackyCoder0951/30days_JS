'use strict';

/* Day 1 - Variables and Data Types */

// Activity 1 : Variable Declaration
console.log("Activity 1 : Variable Declaration :- ");
// Task 01 - WAP to create a 'var' / assing it a number / log the value to console

var n1 = 10;
console.log(n1);

// Task 02 - WAP to create a 'let' / assing it a string / log the value to console

let str = "jignesh";
console.log(str);

// Activity 2 : Constant Declaration
console.log("Activity 2 : Constant Declaration :- ");
// Task 03 - WAP to create a 'const' / assing it a boolean value / log the value to console

const bool = true;
console.log(bool);

// Activity 3 : Data Types
console.log("Activity 2 : Data Types :- ");
// Task 04 - WAP to creates variables of different data types / log each variable's type using 'typeof' operator

let n = 10;
console.log("type of number - ",typeof n);

let str1 = "jignesh";
console.log("type of string - ",typeof str1);

let bool1 = true;
console.log("type of boolean - ", typeof bool1);

let obj = new Object(); {
    name: "jignesh";
    age: 20;
    contact: 7691848733;
}
console.log("type of Object using new - ", typeof obj);

let ObjAttrib = {
    "color" : "red"
};
console.log("type of Object - ", typeof ObjAttrib);

let array = [
    "class",
    "Object",
    "Method"
];
console.log("type of array - ", typeof array);

// Activity 4 : Reassigning Variables
console.log("Activity 4 : Reassigning Variables :- ");
// Task 05 - WAP to declare variable using 'let' then assign it a initial value then reassign the value then log the both value.

// before reasssigning value
let val = "value";
console.log(val);

// after reassigning value
val = "Jignesh";
console.log(val);

// Activity 5 : Understanding const
console.log("Activity 5 : Understanding Const :- ");
// Task 06 - WAP to declare variable using 'const' then observe the error 

// befor reassigning value
const newVal = "New Value";
console.log(newVal);

// after reassigning value
newVal = "New Value";
console.log(newVal);

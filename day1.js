'use strict';
// task 1 - create a 'var' / assing it a number / log the value to console

var n1 = 10;
console.log(n1);

// task 2 - create a 'let' / assing it a string / log the value to console

let str = "jignesh";
console.log(str);

// task 3 - create a 'const' / assing it a boolean value / log the value to console

const bool = true;
console.log(bool);

// task 4 - creates variables of different data types / log each variable's type using 'typeof' operator

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

// task 5 - declare variable using 'let' then assign it a initial value then reassign the value then log the both value.

// before reasssigning value
let val = "value";
console.log(val);

// after reassigning value
val = "Jignesh";
console.log(val);

// task 6 - declare variable using 'const' then observe the error 

// befor reassigning value
const newVal = "New Value";
console.log(newVal);

// after reassigning value
newVal = "New Value";
console.log(newVal);

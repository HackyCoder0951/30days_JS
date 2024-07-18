'use strict';
// Request 1 - Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
const Req1 = "\nRequest 1 Output :- \n";
console.log(Req1); 
// String
let stringVar = "Hello, World!";
console.log(`01 - String Value: ${stringVar}, Type: ${typeof stringVar}`); 
// Output: Value: Hello, World!, Type: string

// Number
let numberVar = 42;
console.log(`02 - Number Value: ${numberVar}, Type: ${typeof numberVar}`); 
// Output: Value: 42, Type: number

// Boolean
let booleanVar = true;
console.log(`03 - Boolean Value: ${booleanVar}, Type: ${typeof booleanVar}`); 
// Output: Value: true, Type: boolean

// Object
let objectVar = { key: "value" };
console.log(`04 - Object Value: ${JSON.stringify(objectVar)}, Type: ${typeof objectVar}`); 
// Output: Value: {"key":"value"}, Type: object

// Array
let arrayVar = [1, 2, 3];
console.log(`05 - Array Value: ${arrayVar}, Type: ${typeof arrayVar}`); 
// Output: Value: 1,2,3, Type: object

// Function
let functionVar = function() { return "Hello!"; };
console.log(`06 - Function Value: ${functionVar}, Type: ${typeof functionVar}`); 
// Output: Value: function() { return "Hello!"; }, Type: function

// Undefined
let undefinedVar;
console.log(`07 - Udefined Value: ${undefinedVar}, Type: ${typeof undefinedVar}`); 
// Output: Value: undefined, Type: undefined

// Null
let nullVar = null;
console.log(`08 - Null Value: ${nullVar}, Type: ${typeof nullVar}`); 
// Output: Value: null, Type: object

// Symbol
let symbolVar = Symbol("symbol");
console.log(`09 - Symbol Value: ${symbolVar.toString()}, Type: ${typeof symbolVar}`); 
// Output: Value: Symbol(symbol), Type: symbol

// BigInt
let bigIntVar = 1234567890123456789012345678901234567890n;
console.log(`10 - BigInt Value: ${bigIntVar}, Type: ${typeof bigIntVar}\n`); 
// Output: Value: 1234567890123456789012345678901234567890, Type: bigint


/* 
Explanation:
    1 - String: A sequence of characters enclosed in quotes.
    2 - Number: A numeric value.
    3 - Boolean: A true or false value.
    4 - Object: A collection of key-value pairs.
    5 - Array: An ordered list of values.
    6 - Function: A block of code designed to perform a particular task.
    7 - Undefined: A variable that has been declared but not assigned a value.
    8 - Null: A special value representing "no value" or "empty".
    9 - Symbol: A unique and immutable primitive value.
   10 - BigInt: A numeric value representing an integer with arbitrary precision.
*/

// Request 2 - Create a script that demonstrates the difference in behaviour between let and const when it comes to reassignment 
const Req2 = "Request 2 Output :- \n";
console.log(Req2);
// let can be reassigned
let variableLet = "01 - Initial value with let";
console.log(variableLet); 
// Output: Initial value with let

variableLet = "01.1 - New value with let";
console.log(variableLet); 
// Output: New value with let

// const cannot be reassigned
const variableConst = "02 - Initial value with const";
console.log(variableConst); 
// Output: Initial value with const

// Trying to reassign a const variable will result in an error
try {
    variableConst = "02.1 - New value with const";
} catch (error) {
    console.log(error.message); 
    // Output: Assignment to constant variable.
}

// Demonstrating let in a block scope
{
    let blockScopedLet = "03 - Block scoped let";
    console.log(blockScopedLet); 
    // Output: Block scoped let
}

// Uncommenting the next line would result in a ReferenceError
try {
    blockScopedLet = "02.1 - New value with const";
} catch (error) {
    console.log(error.message); 
    // Output: ReferenceError: blockScopedLet is not defined
}


// Demonstrating const in a block scope
{
    const blockScopedConst = "04 - Block scoped const";
    console.log(blockScopedConst); 
    // Output: Block scoped const
}
// Uncommenting the next line would result in a ReferenceError
try {
    blockScopedConst = "02.1 - New value with const";
} catch (error) {
    console.log(error.message); 
    // Output: ReferenceError: blockScopedConst is not defined
}

/*
Explanation:
Reassignment with let:

    'let' allows the variable to be reassigned. 
    In the example, 'variableLet' is first assigned the value "Initial value with let" and then reassigned to "New value with let".

Reassignment with const:

    'const' does not allow the variable to be reassigned. 
    Attempting to reassign 'variableConst' results in a TypeError.

Block Scope:

    Both 'let' and 'const' are block-scoped, meaning they are only accessible within the block they are defined. 
    Trying to access them outside their block results in a ReferenceError. 
    The script demonstrates this by showing 'blockScopedLet' and 'blockScopedConst' inside their respective blocks and causing an error if accessed outside.
*/
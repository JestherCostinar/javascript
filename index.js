// Primitive Types Variable

let name = 'Jesther'; // String literal
let age = 23; // Number Literal
let isApproved = false; //Boelean Literal
let firstName; // Undefine
let selectedColor = null; // Null - To clear the value of variable


// Reference Type Variable 

// Object-  When dealing with related variable put it in object

let person = {
    name: 'Jersey',
    age: 22
}; // Curly braces - Object literal

// Two ways to change object value
// 1. Dot notaion
person.name = 'Kasmir';

// 2. Bracket notation
let selection = 'name';
person[selection] = 'Tiger';

// Arrays 
let selectedColors = ['Red', 'Orange', 'Blue'];
selectedColors[3] = 'Green';
selectedColors[4] = 2;

// console.log(selectedColors.length);

// Function
// Performing a task
function greet(name, lastName) { // Inside the parenthesis is parameter
    console.log('Hello ' + name + ' ' + lastName);
}

// greet('Jesther', 'Costinar'); // Jesther value is called argument

// Calculate a value
function square(number) {
    return number * number
}

let number = square(2);
// console.log(number);

// JavaScript Operator

// Arithmetic operator
let x = 10;
let y = 3;

// console.log(x + y); //Addition
// console.log(x - y); //Subtraion
// console.log(x * y); //Mulitiplication
// console.log(x / y); //Division
// console.log(x % y); //Modulo
// console.log(x ** y); //Exponent

// console.log(x++); //Increment
// console.log(x--); //Decrement

// Assignment Operator

x = x + 5;
x += 5 // Shortcut way

// Compasiron Operator

// Relational Operator
// console.log(x > 0);
// console.log(x >= 10);
// console.log(x < 1);
// console.log(x <= 1);

// // Equality Operator
// console.log(x === 0); check if value and data type is equal
// console.log(x !== 0); check if value and data type is not equal
// Tips: Most of the time use the strict than the lost because its more precise and accurate

// Ternary Operator
let points = 110;

let type = points > 100 ? 'Gold' : 'Silver';
// console.log(type);

// Logical Operator

// Logical AND (&&)
console.log(true && true); // True - Both operand are True
console.log(true && true); // False - 1 is False 

let highIncome = true;
let creditScore = true;

let eligibleForLoan = highIncome && creditScore;
console.log(eligibleForLoan);
 
// Logical OR (||)
console.log(true && true); // True - atleast 1 operand is True
console.log(false && true);

// Not Operator
let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);

// Falsy 
// - underfined
// - null
// - 0
// - false
// - ''
// - NaN

// Truthy - Anything that is not Falsy
// - Number
// - String

// Swapping Variable
let a = 'red';
let b = 'blue';

let temp = a;
a = b;
b = temp;

console.log('A', a);
console.log('B', b);
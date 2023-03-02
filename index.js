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

// Function
// Performing a task
function greet(name, lastName) { // Inside the parenthesis is parameter
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Jesther', 'Costinar'); // Jesther value is called argument

// Calculate a value
function square(number) {
    return number * number
}

let number = square(2);
console.log(number);


/* 
NOTES

For..of - Use to iterate over array element/value. Recommended to use to iterate over Array
For..in - Use to iterate over object property. Recommended to use over Obj
For Loop - Use when you know how many times to iterate the block of codes in spe
While Loop - Use when you do not know how many times you need to execute the loop


*/

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
// console.log(true && true); // True - Both operand are True
// console.log(true && true); // False - 1 is False 

let highIncome = true;
let creditScore = true;

let eligibleForLoan = highIncome && creditScore;
// console.log(eligibleForLoan);
 
// Logical OR (||)
// console.log(true && true); // True - atleast 1 operand is True
// console.log(false && true);

// Not Operator
let applicationRefused = !eligibleForLoan;
// console.log(applicationRefused);

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

// console.log('A', a);
// console.log('B', b);

// CONTROL FLOW

// Conditional Statement

// If and Else statement
let hour = 6;

// if (hour >= 6 && hour < 12) 
//     console.log('Good Morning'); 
// else if (hour >= 12 && hour < 18) 
//     console.log('Good Afternoon');
// else 
//     console.log('Good Evening!');

// Switch and case
let role = 'guest';

// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;
    
//     case 'moderator':
//         console.log('Moderator User');
//         break

//     default: 
//         console.log('Unknown User');
// }

// Loops

// For Loops

for (let i = 5; i >= 1; i--) {
    if(i % 2 !== 0) {
        // console.log(i);
    } 
}

// While Loops

let i = 0; 

// while (i < 5) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }

// Do While loop

do {
    if (i % 2 !== 0) {
        // console.log(i);
    }
    i++;
} while (i < 5);

// For in loops recommended to use to loop in Object

const userInfo = {
    name: 'Jesther',
    age: 30
}

for (let key in person) {
    // console.log(key, userInfo[key]);
} 

for (let index in selectedColors) {
    // console.log(index, selectedColors[index]);
}

// For..of loop recommend to use to loop over the arary
for (let color of selectedColors) {
    // console.log(color);
}

// Suummary: Use for..of loop if you want to loop the array element
// and use for..in loop to iterate over the properties of an object

function maximum(firstNum, secondNum) {
    return firstNum > secondNum ? firstNum : secondNum;
}

// console.log(maximum(6, 6));

function isLandsacpe(width, height) {
    return width > height;
}

// console.log(isLandsacpe(3,3));

function fizzBuzz(input) {
    if (input % 3 === 0 && input % 5 === 0)
        console.log('FizzBuzz');
    else if (input % 3 === 0) 
        console.log('Fizz');
    else if (input % 5 === 0)
        console.log('Buzz');
    else if (typeof input !== 'number')
        console.log(NaN)
    else 
        console.log(input);
}

// fizzBuzz(true);


// Demerit Points

function checkSpeed(speed) {
    let pointsPerKm = 5;
    const speedLimit = 70;

    if (speed < (speedLimit + pointsPerKm)) { 
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / pointsPerKm);
    if (points >= 12) 
        console.log('Suspended');
    else 
        console.log('Points: ', points);

}


// checkSpeed(130);


// Odd or Even

// showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        let message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

// Count Truthy

const array = [0, null, undefined, '', 2, 3];
// countTruthy(array);

function countTruthy(array) {
    let count = 0;
    for (let item of array) 
        if (item)
            count++;
    
    console.log(count);
}

// String Properties

const movie = {
    title: 'a',
    year: 2009,
    rating: 4.5,
    diretor: 'Me'
}

// showProperties(movie);


function showProperties(obj) {
    for (let properties in obj)
        if (typeof obj[properties] === 'string')
            console.log(properties, obj[properties]);
}

// console.log(sum(10))

function sum(limit) {
    let sum = 0;

    for (let i = 1; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0))
            sum += i;
    }

    return sum;
}

// Grade

const marks = [80, 80, 50];

// console.log(calculateGrade(marks));

function calculateGrade(mark) {
    const average = calculateAverage(mark);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let grade of array) 
        sum += grade;
    return sum / array.length;
}

// Stars

// showStar(5);

function showStar(row) {
    for (let i = 1; i <= row; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++) 
            pattern += '*'
        console.log(pattern);
    }
}

// Prime Number

showPrimes(20);

function showPrimes(limit) {
    for(let number = 2; number <= limit; number++) 
        if(isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}
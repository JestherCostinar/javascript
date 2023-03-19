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

// showPrimes(20);

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


// Object - Object oriented programming(OOP) style of programming
//          Where we see a collection of object that perform a functionality.

// Basic

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
    move: function() {
        console.log('moving..');
    }
}

// circle.move();

/* 

Factory function
- is use to create and return a new object with consistent set of properties and methods
- Advantage of factory function, you dont have to write the same code again to create an object.

*/ 


function createCircle(radius) {
    return {
        radius,
        move() {
            console.log('Circle Moving...');
        }
    }
}

const circle1 = createCircle(1);
// console.log(circle1.move());

const circle2 = createCircle(2);
// console.log(circle2.move());


/*

Contructor Function

- Naming convention is PascalNotation (ex. Circle)
- Return an object using the this keyword
*/

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Circle Draw..');
    }
}

const new_circle = new Circle(2);
// console.log(new_circle);

/*

Dynamic Nature of an object.
- You can insert a new property or method an object
- Note: object or array that is assigned as a const is immutable.
meaning. the properties or elements of that object or array can still be changed.
*/

const triangle = {
    side: 3,
};

triangle.degree = 180;
triangle.move = function() {
    console.log('Moving triangle');
};

delete triangle.degree;

// console.log(triang?le);


/*
Cloning an Object

To clone an object there is 3 way.

1. Old style
    - Using the for..in loop and assign the property to another object.

    const another = {};
    for (let property in star)
        another[property] = star[property];
        
2. Using the assign function
    - Using the assign, it will copy the property and method
    but you can still add property and method to object

    const another = Object.assign({
        color: 'yellow'
    }, star);

    const another1 = Object.assign({}, star);

3. Using the spread (...) 
    - Simpleist way to clone an object.

    const another = { ...start };

-- Takeaway: Using the assign and spread will clone an object
but if you want to add more property and method to object use assign
*/


const star = {
    side: 5,
    shine() {
        console.log('Star Shining..');
    }
}

// const another = {};

// for (let key in star) {
//     another[key] = star['key'];
// }

const another = Object.assign({
    color: 'yellow'
}, star);

const another1 = { ...star };
// console.log(another1);

// Note: There is a garbage collector in JavaScript that happen automatically in the background
// console.log(Math.PI);

// Template literal

age = 23;
const message = `
Hi Jesther,

I know you age is ${age} Message...

Regards,`;

console.log(message);

const now = new Date();
const date1 = new Date('December 15, 2023 12:13 23pm');
// console.log(date1);


const address = {
    street: 'Street',
    city: 'Taguig',
    zipCode: 1630,
}

function showAddress(address) {
    for (let property in address)
        console.log(property, address[property]);
}

// showAddress(address);

// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

// Contructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}


const address1 = new Address('Taguig', 'Taguig', 1);
const address2 = new Address('Taguig', 'Taguig', 1);

function areEqual(address1, address2) {
    for (let property in address1) {
        return address1[property] === address2[property];
    }
}

function areSame(address1, address2) {
    return address1 === address2;
}

// console.log(areEqual(address1, address2));
// console.log(address2);


const blog = {
    title: 'JavaScript Tutorial',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sint!',
    author: 'Jesther',
    view: 1000,
    comments: [
        { author: 'Anonymous', body: 'This is great' },
        { author: 'Anonymous2', body: 'This is great too!' },
    ],
    isLive: true,
}

// console.log(blog);

function Posts(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.view = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new Posts('a', 'b', 'c');

// console.log(post);


// Array

// Adding Element to array

/*
3 ways to add element to array

1. End of array - push() method
2. Beginning of array - unshift() method
3. Middle of array - splice() method
*/ 
const letters = ['a', 'b'];

letters.push('c', 'd');
letters.unshift('z');
letters.splice(2, 0, 3, 4);
console.log(letters);

/* 

Find Elements in array (Primitive Type)

- indexOf() - it will return the index of array element. Data type is matter for array element.
- lastIndexOf() - it will return the index of last duplicate in array element.
- includes() - returns true or false if the elemets exist in the array

*/
console.log(letters.indexOf('a')); // return the index of elements in the array
letters.push('a');
console.log(letters);
console.log(letters.lastIndexOf('a'));
console.log(letters.includes('d'))


/* 

Find Elements in array (Reference Type)

- find() - Return the elements of array
- findIndex() - Return the index of element in the array

*/

const courses = [
    {id: 1, name: 'IT'},
    {id: 2, name: 'CS'}
];

const course = courses.find(function(course) {
    return course.name === 'IT';
})

const course2 = courses.findIndex((course) => {
    return course.name === 'IT';
})

console.log(course)
console.log(course2)

/*

Removing Elements to Array

- pop() - Remove Element in the End of Array and Store in variable the remove array(Optional)
- shift() - Remove Element in the beginning of Array
- splice() - Remove elements in the middle of array
*/

let numberInWord = ['one', 'two', 'three', 'four'];

// const last = numberInWord.pop();

// console.log(numberInWord);
// console.log(last);

// numberInWord.shift();
// console.log(numberInWord);

// numberInWord.splice(1, 1);
// console.log(numberInWord);


/*
Emptying Array

In order to empty array there is 4 way. 
1. Point the array to new empty array(Recommended)
Code: numberInWord = [];

2. Assign 0 to array length
Code: numberInWord.length = 0;

3. Using the splice() method
Code: numberInWord.splice(0, numberInWord.length);

4. Using the pop() method
Code: while(numberInWord.length > 0)
        numberInWord.pop();
*/

while(numberInWord.length > 0)
    numberInWord.pop();

console.log(numberInWord);

// Combine 2 array
const first = [1, 2, 3];
const second = [4, 5, 6];

// To combine to array we use concat() method
// const combine = first.concat(second);
// console.log(combine);

// To slice an array we can use slice() method
// const slice = combine.slice(3, 5);
// console.log(slice); // The result slice the combine array ang get the element in index 3 to 5

// Another way to copy the array is use the spread operator - ES6
const combine = [...first, ...second]; // We can also dynamic add element in between, end, and beginning using the spread operator 
console.log(combine);

// Another way to iterate array is using the foreach() Method

combine.forEach((number, index) => {
    console.log(number, index);
});

// Joining Array
const numberArray = [1, 2, 3];
const joined = numberArray.join(',');
console.log(joined);

const messaged = 'Hi This message from email';

const parts = messaged.split(' ');
console.log(parts);

console.log(parts.join('-'));


// Sort Array

const shuffleCourseArray = [
    {id: 1, name: 'IT'},
    {id: 2, name: 'CS'}
];


shuffleCourseArray.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return ;
});

console.log(shuffleCourseArray);


/*
Some and every array function - New to JavaScript

e
*/
const testElement = [1, -1, 2, 3];

const allPositive = testElement.every((element) => {
    return element > 0;
});

const atleastOnePositive = testElement.some((element) => {
    return element > 0;
});

console.log('Is all positive?', allPositive);
console.log('Atleast one positive?', atleastOnePositive);


// Filter array using filter method
// filter method return a new set of element that match the filter criteria

const filter = testElement.filter((value) => {
    return value >= 0;
});

console.log(filter);

// Mapping array


// const arr = [2, 7, 11, 15];
// const target = 13;

// console.log('Two sum');
// let result = '';
// for(let i = 0; i < arr.length; i++) {
//     for (let j = 0; j <= i; j++) {
//         if(arr[j] + arr[i] === target) {
//             result += arr[j] + ' ' + arr[i];
//         }
//     }
// }
//  console.log(result);

// const arr1 = [9,9,9,9,9,9,9];
// const arr2 = [9,9,9,9];
// const arrResult = [];
// let res = 0;
// for (let i = 0; i < arr1.length; i++) {
//     res += arr1[i] + arr2[i];
// }

// let num1 = parseInt(arr1.join(''));
// let num2 = parseInt(arr2.join(''));
// let total = num1 + num2;
// console.log(total);

// const digits = String(total) .split('') .map(Number);
// console.log(digits);

// const reverse = [];


// for (let i = digits.length - 1; i >= 0; i--) {
//     reverse.push(digits[i]);
// }

// console.log(reverse);

let arrayNumbers = [1, 2, 3, -3, 4, 5];

const total = arrayNumbers.reduce((initiliaze, currentValue) => {
    return initiliaze + currentValue;
});

console.log(total);

const arrayNumber = arrayFromRange(-10, 4);
// Array - Array from range
console.log(arrayNumber);

function arrayFromRange(min, max) {
    output = [];
    for (let i = min; i <= max; i++) {
        output.push(i);
    }
    return output;
}

// Check if the elements exist in the array

const arrayNumberAgain = [1, 2, 3, 4, 5];

console.log(includes(arrayNumberAgain, 7));

function includes(array, searchElement) {
    for (let element of array) {
        if (element === searchElement)
            return true;
    }
    return false;
}

// Return new array that exclude the element

const originalArray = [1, 2, 3, 4, 5];

const excludedArray = except(originalArray, [1, 2, 3, 4]);

console.log(excludedArray);

function except(array, excluded) {
    const output = [];

    for (let element of array) {
        if (!excluded.includes(element)) {
            output.push(element);
        }
    }
    return output;
}

const originalNumbers = [11, 2, 3, 4];

const moveArray = move(originalNumbers, 2, 1);

console.log(moveArray);


function move(array, index, offset) {
    if( offset >= array.length || offset < 0) {
        console.error('Invalid offset');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(offset, 0, element);
    return output;
}


const max = getMax(originalNumbers);

console.log(max);

function getMax(array) {
    let max = array[0];

    for (let element of array) {
        if (element > max) {
            max = element;
        }
    }
    return max;
}

const movies = [
    {
        title: 'a',
        year: 2018,
        rating: 4.5
    },
    {
        title: 'b',
        year: 2019,
        rating: 4.7
    },
    {
        title: 'c',
        year: 2020,
        rating: 3.5
    },
    {
        title: 'd',
        year: 2021,
        rating: 4
    },
];

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);
// Object Destructuring 1
// What does the following code return/print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


// Object Destructuring 2
// What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


// Object Destructuring 3
// What does the following code return/print?

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 'Your name is Alejandro and you like purple'
getUserData({firstName: "Melissa"}) // 'Your name is Melissa and you like green'
getUserData({}) // 'Your name is undefined and you like green'


// Array Destructuring 1
// What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // 'Maya'
console.log(second); // 'Marisa'
console.log(third); // 'Chi'


// Array Destructuring 2
// What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // 'Raindrops on roses'
console.log(whiskers); // 'whiskers on kittens'
console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles', 'warm woolen mittnes', 'Brown paper packages tied up with strings']


// Array Destructuring 3
// What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]


// ES2015 Refactoring
// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Assigning Variables to Object Properties
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

// ES2015 Object Destructuring
/* Write an ES2015 Version */

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const {a, b} = obj;


// ES5 Array Swap

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;


// ES2015 One-Line Array Swap with Destructuring
/* Write an ES2015 Version */

[1, 2] = [2, 1]

// raceResults()
// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array
// Write a one line function to make this work using
// An arrow function
// Destructuring
// ‘Enhanced’ object assignment (same key/value shortcut)

const raceResults = ([first, second, third, ...rest]) => {
    return {first, second, third, rest};
}

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])


/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

////////////////////////////
///      disregard       ///
/// My Class Notes Below ///
////////////////////////////

const teaOrder = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan', 
    price: 12.99,
    hasCaffeine: true,
    quantity: 3
};

const {price, quantity, teaName} = teaOrder; 
// looks in teaOrder to see if there are properties to match the names passed into the curly braces.
const {origin} = teaOrder; 
// returns value in teaOrder to match the key "origin"
const {country} = teaOrder; 
// returns undefined because the param does not exist in the object teaOrder

// we can use the rest property to gather up the remaining parameters 
// in the object. if we look at 'others', it contains teaName, price, and quantity
const {variety, origin, hasCaffeine, ...others}; 

// we can set a default parameter if it is not in the object
const {brewTemp = 175} = teaOrder;

// we can rename using destructuring
const {teaName: WinterSp} = teaOrder;

// we can use renaming and setting a default in combination
// if javascript does not find the default parameter name in the object it will set to the default we hand it and rename it
const {brewTemp: temp = 175} = teaOrder;

// here a default value is set for quantity
function checkout(tea) {
    const {quantity = 1, price} = tea;
    return quantity * price;
}

checkout(teaOrder);

// Destructuring Arrays

const students = [ 
    {name: 'Iain', gpa: 4.2},
    {name: 'Georgia', gpa: 4.2},
    {name: 'Indie', gpa: 2.2},
    {name: 'Owen', gpa: 4.2},
    {name: 'Hendricks', gpa: 4.6},
    {name: 'Allison', gpa: 4.0}
];

const [firstStudent, secondStudent, , ...theRest] = students; 
//tells JS to look in the array and assign the first value to the variable name "topStudent"
// same for second, skips over the third element
// we can use rest to grab the rest of them into a list

// Function Destructuring
// to extract key-value pairs from an object into variables

// with objects

const tea = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan', 
    price: 12.99,
    hasCaffeine: true,
    quantity: 3
};

function getTotal({quantity: qty = 1, price}) {
    return qty * price;
}

getTotal(tea);

// and with arrays

const longJump = ['Tammy', 'Jill', 'Samantha'];
const swimMeet = ['Japan', 'Chile', 'France'];

function getRank([gold, silver, bronze]) {
    return {
        gold, 
        silver,
        bronze
    }
}

getRank(longJump);
getRank(swimMeet);


// Nested Destructuring
// Step through carefully, and at a certain point it becomes too confusing.

// to access:
const {Rated: {rating, advisory}} = movie 

const { 
    Rating: [ 
        { Value: imdbRating}, 
        { Value: rtRating} 
    ],
    Versions: [
        {runtime: original},
        {runtime: directorsCut}
    ] 
} = movie;

// Destructuring Swap
// a fancy one-line 

// the multiline way
let delicious = 'mayonnaise';
let disgusting = 'whipped cream';

let both = [delicious, disgusting];
[disgusting, delicious] = both; // swaps them

// on one line
[disgusting, delicious] = [delicious, disgusting] //SWAPS THEM wowza


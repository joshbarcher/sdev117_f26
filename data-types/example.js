
//numbers
console.log(15 / 2);
console.log(8 / 3);
console.log(16 / 4);
console.log( 1/3 + 1/3 + 1/3);

//strings 
const greeting = "Hello, class!";
const message = 'Do not forget to show up for class';
console.log(greeting);
console.log(message);

//quotes in strings should be escaped
const silly = "I am feeling \"fine\" today!";

//or they have to be alternating
const silly2 = "I am feeling 'fine' today!";
const silly3 = 'I am feeling "fine" today!';

const name = "Mr.\nJosh\nB.\nArcher";
console.log(name);

console.log("C:\\Program Files\\Elgato\\StreamDeck\\");
console.log("Here are four slashes - \\\\ - for you!");

const num1 = 15;
const num2 = 21;
const results = num1 * num2;

console.log("The result is: " + results + "!!!!");

//print num1 + num2 = result, using string concatenation
// The expected output is: "15 + 21 = 36"
console.log(num1 + " * " + num2 + " = " + results);

//same result with a string template literal
console.log(`The result is: ${results}!!!!`);

//same result with a string template for multiply
console.log(`${num1} * ${num2} = ${results}`);

//create three variables with your first, middle initial and last name

//then print them in a string template literal
// expected output: "First Middle. Last"
const first = "John";
const middle = "Q";
const last = "Public";

console.log(`${first} ${middle}. ${last}`);

//special values

//null
let object = null;

if (object === null) {
    console.log("null detected");
} else {
    console.log("null not detected");
}

//undefined 
let num;
console.log(num);

//checking for undefined
if (num === undefined) {
    console.log("undefined detected");
} else {
    console.log("undefined not detected");
}

//NaN - not a number
const dumb = 10 / "josh";
console.log("Dumb is " + dumb);

//checking for NaN
if (Number.isNaN(dumb)) {
    console.log("NaN detected");
} else {
    console.log("NaN not detected");
}
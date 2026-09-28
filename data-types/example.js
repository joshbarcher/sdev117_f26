
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


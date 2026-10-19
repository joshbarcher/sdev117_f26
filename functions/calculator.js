
const add = (a, b) => {
    return a + b;
}
const mult = (a, b) => a * b;
const divide = (a, b) => a / b;
const sub = (a, b) => a - b;

const printMsg = msg => console.log(msg);
const printDefMsg = () => console.log("Default message");
const printEmail = (to, from, msg, cc) => {
    console.log("To", to);
    console.log("From", from);
    console.log(msg);
}

calc(divide, 3, 4);
calc(mult, 3, 4);
calc(printEmail, "Josh", "Jared");

//this is a higher order function!
function calc(func, a, b) {
    console.log(func(a, b));
}

console.log(add(1, 2));
console.log(mult(3, 6));
console.log(divide(-10, 2));
console.log(sub(-10, 2));

printMsg("Hello");
printMsg("How are you?");
printDefMsg();

printEmail("dept@grc", "jarcher@grc", "Hello");
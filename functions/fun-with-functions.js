
//if a function doesn't return a value with "return" keyword
//then it implictly returns undefined
const message = print("Hello class!");
console.log(message);

function print(msg) {
    console.log("Message", msg);
}
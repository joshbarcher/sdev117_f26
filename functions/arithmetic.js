
let result = addMany(3);
console.log(`Result is: ${result}`);

result = addMany(3, 10);
console.log(`Result is: ${result}`);

result = addMany();
console.log(`Result is: ${result}`);

result = addMany(3, 20, 4, 16, 100, 13, 15, -10);
console.log(`Result is: ${result}`);

result = addMany(3, 20, 4, 16, 100);
console.log(`Result is: ${result}`);

// function add(num1, num2) {
//     if (num1 === undefined) {
//         return 0;
//     }
//     else if (num2 === undefined) { //do we only have 1 argument
//         return num1 + 1;
//     } else {
//         return num1 + num2;
//     }
// }

function addMany() {
    //console.log(arguments);

    //loop over the array of arguments and add them together
    let sum = 0;
    for (const num of arguments) {
        sum += num;
    }

    return sum;
}
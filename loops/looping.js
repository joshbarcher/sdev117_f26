
//loop and generating random numbers between [1, 10]
//add them together
//stop when they sum is greater or equal to 100

let sum = 0;
let rolls = 0;
while (sum < 100) {
    const rand = Math.floor(Math.random() * 10) + 1;
    console.log("Random generated", rand);

    //another roll
    rolls++;

    sum += rand;
    console.log("Current sum", sum);
}

console.log("All done, final sum is", sum);
console.log("Total rolls", rolls);
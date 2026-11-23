
//a normal javascript object
const fruit = {
    type: "orange",
    subtype: "florida",
    ripe: true, 
    diameter: 10,
    nums: [1, 2, 3],
    producer: {
        farm: "Orangeville",
        location: "Florida"
    },
    eat: () => console.log("You ate the orange")
}

console.log(fruit);

//a JSON STRING
const jsonFruit = JSON.stringify(fruit);
console.log(jsonFruit);

//convert back to a Javascript object
const objectFruit = JSON.parse(jsonFruit);
console.log(objectFruit);
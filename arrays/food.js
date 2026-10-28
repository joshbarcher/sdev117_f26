
const food = [
  "steak", "chapatti", "pho", "burritos", "chicken alfredo",
  "pretzels", "com tam", "tacos", "chicken gnocchi", "pad thai",
  "sushi", "ramen", "pizza", "lasagna", "paella",
  "biryani", "butter chicken", "dumplings", "falafel", "shawarma",
  "hummus", "moussaka", "spanakopita", "gyros", "kebabs",
  "tikka masala", "samosas", "dal", "naan", "jollof rice",
  "fufu", "injera", "bobotie", "tagine", "couscous",
  "shakshuka", "bibimbap", "kimchi", "bulgogi", "tteokbokki",
  "banh mi", "spring rolls", "laksa", "nasi goreng", "satay",
  "rendang", "adobo", "lumpia", "pancit", "peking duck",
  "kung pao chicken", "mapo tofu", "fried rice", "chow mein", "dim sum",
  "tempura", "okonomiyaki", "takoyaki", "udon", "katsu curry",
  "enchiladas", "quesadillas", "tamales", "pozole", "mole",
  "ceviche", "empanadas", "arepas", "feijoada", "churrasco",
  "poutine", "hamburger", "hot dogs", "mac and cheese", "fried chicken",
  "clam chowder", "jambalaya", "gumbo", "barbecue ribs", "meatloaf",
  "fish and chips", "shepherd's pie", "bangers and mash", "full english breakfast", "pierogi",
  "goulash", "schnitzel", "bratwurst", "ratatouille", "coq au vin",
  "croissants", "crepes", "risotto", "carbonara", "gelato",
  "tiramisu", "pancakes", "waffles", "cheesecake", "apple pie"
];

const favorite = food[6];
console.log("My favorite food is", favorite);
console.log("I have", food.length, "favorite food items!");

//print the last food item in the array
const lastItem = food[food.length - 1];
console.log("Last food item", lastItem);

//replace values in the array
console.log(food);
food[2] = "pizza";
food[0] = "truffle fries";
console.log(food);

// for (let i = 0; i < food.length; i++) {
//     const item = food[i];

//     if (item.startsWith("d")) {
//         console.log("You like", item.toUpperCase());
//     }
// }

// for (let item of food) {

//     if (item.startsWith("t")) {
//         console.log("Found item", item);
//     }
// }

//food.forEach((el) => console.log("Food:", el));

//array functions
console.log("You now have", food.length, "food items");

let last = food.pop();
console.log("Last food is", last)
last = food.pop();
console.log("Last food is", last)

console.log("You now have", food.length, "food items");

food.push("tamales");
food.push("hot pocket")

console.log("You now have", food.length, "food items");

const entrees = ["chicken", "steak", "salad"];
const dessert = ["ice cream", "pie"];

let all = entrees.concat(dessert);
console.log("All food", all);

all = all.reverse();
console.log("All food", all);
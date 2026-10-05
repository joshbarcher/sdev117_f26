
const name = prompt("Enter your name");

switch (name) {
    case "Josh":
        console.log("Your name is Josh");
        console.log("That's a good name!");
        break;
    case "Adam":
        console.log("You name starts with 'a'");
        break;
    case "Sil":
        console.log("You were a character from the Sopranos");
        break;
    case "Olasope":
        console.log("You are probably Nigerian");
        break;
    default:
        console.log(`Your name is ${name}, that's great!`);
        break;
}
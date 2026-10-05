
//ask the user a few things
const breakfast = prompt("What did you have for breakfast");
const exercise = confirm("Did you exercise today?"); //OK = true, Cancel = false

console.log(breakfast, typeof breakfast);
console.log(exercise, typeof exercise);

if (breakfast === "fruit") {
    console.log("studious");
} else if (exercise) {
    if (breakfast === "cereal") {
        console.log("studious");
    } else if (breakfast === "pancakes") {
        console.log("studious");
    } else if (breakfast === "eggs") {
        console.log("studious");
    }
} else {
    if (breakfast === "cereal") {
        console.log("studious");
    } else if (breakfast === "pancakes") {
        console.log("studious");
    } else if (breakfast === "eggs") {
        console.log("studious");
    }
}

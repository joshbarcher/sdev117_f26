
const printPerson = function(fName, lName) {
    //fname and lname are local variables
    console.log(fName, lName);

    if (fName.length > 0) {
        //this is a local variable, with block scope
        const cool = true;
        console.log(cool);
    }
}

printPerson("Diego", "Ortiz");

//console.log(fName, lName);

//age is a global variable
const age = 10;

if (age > 0) {
    console.log("Your age is", age);

    const alive = true;


}

printAge();

for (let i = 1; i <= 5; i++) {
    console.log("Your age is", age);
}

function printAge() {
    console.log("Your age is", age);
}

const items = document.querySelectorAll("option");

console.log(items);

//increment the values by one 
for (const item of items) {
    //skip the $ sign and convert to a floating point number, then increment
    const newValue = parseFloat(item.textContent.substring(1)) + 5;

    console.log("New value", newValue);

    item.textContent = "$" + newValue;
}
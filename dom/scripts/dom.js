
const items = document.querySelectorAll("option");

console.log(items);

//increment the values by one 
for (const item of items) {
    //skip the $ sign and convert to a floating point number, then increment
    const newValue = parseFloat(item.textContent.substring(1)) + 5;

    console.log("New value", newValue);

    item.textContent = "$" + newValue;
}

//select all h1 elements
const headings = document.querySelectorAll("h1");

//loop over each and change the style individually
for (const heading of headings) {
    heading.style.color = "rgb(182, 182, 255)";
    heading.style.fontFamily = "'Times New Roman', Times, serif";
    heading.style.textDecoration = "underline rgb(182, 182, 255)";
}

//select all paragraphs and set their text to italics
const paras = document.querySelectorAll(".odd");

for (const paragraph of paras) {
    paragraph.style.fontStyle = "italic";
}

const button = document.querySelector("#hide");

button.onclick = function() {
    if (button.textContent === "Hide Paragraphs") {
        toggleParas("Show Paragraphs", "deemphasize");
    } else {
        toggleParas("Hide Paragraphs", "");
    }
}

function toggleParas(buttonText, cssClass) {
    const paras = document.querySelectorAll("p");

    button.textContent = buttonText;
    for (const para of paras) {
        para.className = cssClass;
    }
}

const aside = document.querySelector("aside");
aside.innerHTML = "<h2>More info</h2><p>More stuff here...</p>";

//select the first paragraph
const firstP = document.querySelector("p");
console.log(firstP.classList);
console.log(firstP.className);
console.log(typeof firstP.className);

firstP.className = "deemphasize";
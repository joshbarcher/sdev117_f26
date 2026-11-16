
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

const list = document.querySelector("ul");

//apply a single css class (with the styles grouped under it)
// list.className = "highlight";
// list.className = "italics";

//apply multiple css classes
list.classList.add("highlight");
list.classList.add("italics");
list.classList.add("dorky");

list.classList.remove("dorky");

//practice adding new elements to the DOM

const websiteLi = document.createElement("li");
websiteLi.textContent = "instagram.com";
list.appendChild(websiteLi);

//handle adding a new team to our baseball table!
const addButton = document.querySelector("#add-team");
const form = document.querySelector("form");
addButton.onclick = function(evt) {
    //stop the form from being submitted
    evt.preventDefault();

    //gather up the form data
    const team = document.querySelector("#team").value;
    const wins = parseInt(document.querySelector("#wins").value);
    const losses = parseInt(document.querySelector("#losses").value);
    const division = document.querySelector("#division").value;

    console.log(team, wins, losses, division);

    //add a new row to the table
    const row = document.createElement("tr");
    const teamCell = document.createElement("td");
    const winsCell = document.createElement("td");
    const lossesCell = document.createElement("td");
    const divisionCell = document.createElement("td");

    //configure row
    teamCell.textContent = team;
    winsCell.textContent = wins;
    lossesCell.textContent = losses;
    divisionCell.textContent = division;

    //append to the DOM
    row.appendChild(teamCell);
    row.appendChild(winsCell);
    row.appendChild(lossesCell);
    row.appendChild(divisionCell);

    const tbody = document.querySelector("tbody");
    tbody.appendChild(row);

    //clear out the form
    form.reset();
}
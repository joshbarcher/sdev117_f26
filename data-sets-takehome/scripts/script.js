
//get access to our buttons and declare global variables
let index = 0;

const left = document.querySelector("#previous");
const right = document.querySelector("#next");

left.onclick = function(event) {
    //move down one index
    index--;

    //show the current record
    display();
}

right.onclick = function(event) {
    //move up one index
    index++;

    //show the current record
    display();
}

function display()
{
    //get the next record
    let record = data[index];

    console.log(record);

    //show the record on the page...
}

console.log(data);
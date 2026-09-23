// We can send output to a page in 3 ways!
// #1 - popups (deprecated)
// #2 - browser console/terminal (debug)
// #3 - directly updating a page 

//alert("From script.js - Hello, world!");

console.log("Hello on the console, from script.js");
console.warn("Warning on the console!");
console.info("Info on the console!");
console.error("Error!");

//selecting the paragraph with an id of "output"
const para = document.querySelector("#output");
para.textContent = "Hello, from script.js!";

const num = Math.random();
para.textContent = "Random num = " + num;
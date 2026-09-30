
//select our button, attach a click "handler" to the button
const button = document.querySelector("#calcBtn");
const op1 = document.querySelector("#op1");
const op2 = document.querySelector("#op2");

//this is a function (method) assigned when you click the button
button.onclick = () => {
    let num1 = op1.value;
    let num2 = op2.value;

    //convert string inputs to numbers
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //how can I verify this actually worked?
    console.log(typeof num1);

    const add = num1 + num2;
    const sub = num1 - num2;
    const mult = num1 * num2;
    let div = num1 / num2;
    const mod = num1 % num2;

    //round the division
    //div = Math.round(div); //to the nearest integer
    //div = Math.ceil(div); //up to the next integer
    //div = Math.floor(div); //down to the next integer
    div = div.toFixed(2);

    console.log(`Add result: ${num1} + ${num2} = ${add}`); 
    console.log(`Subtract result: ${num1} - ${num2} = ${sub}`); 
    console.log(`Multiply result: ${num1} * ${num2} = ${mult}`); 
    console.log(`Divide result: ${num1} / ${num2} = ${div}`); 
    console.log(`Modulus result: ${num1} % ${num2} = ${mod}`); 
}
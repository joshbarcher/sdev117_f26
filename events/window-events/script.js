//wait until the page loads (dom is assembled) to run the code below
window.onload = () => {
    randomNumber();
    lotsOfEvents();
}

function randomNumber() {
    const random = Math.random();
    const numbersDiv = document.getElementById("numbers");
    numbersDiv.textContent = random;
}

function lotsOfEvents() {
    //select the target
    const target = document.querySelector(".target");

    target.onclick = () => console.log("clicked");
    target.ondblclick = () => {
        console.log("double click");

        const red = colorComponent();
        const green = colorComponent();
        const blue = colorComponent();
        console.log(red, green, blue);

        target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    };

    target.onmouseenter = () => {
        console.log("mouse entered");
        target.style.scale = "1.25";
    }
    target.onmouseleave = () => {
        console.log("mouse left");
        target.style.scale = "1";
    }
}

function colorComponent() {
    return Math.floor(Math.random() * 256);
}
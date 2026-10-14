let button = document.querySelector("button");
let targetBox = document.querySelector("#target");

button.onclick = function(event) {
    //stop the form from submitting
    event.preventDefault();

    //convert the target number (which is a string) to a number
    let targetNum = targetBox.value;
    targetNum = parseInt(targetNum);

    //loop and show dice until the target number comes up
    let rand = 0;
    while (targetNum !== rand) {
        rand = Math.floor(Math.random() * 6) + 1;
        const htmlImg = `<img src="images/${rand}.png">`;

        console.log("target", typeof targetNum);
        console.log("rand", typeof rand);

        const diceArea = document.querySelector(".dice-area");
        diceArea.innerHTML += htmlImg;
    }
};


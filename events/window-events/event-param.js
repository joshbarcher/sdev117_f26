
window.onload = () => {
    //select all buttons assign an event handler
    const buttonsDiv = document.querySelector("#buttons");
    const buttons = buttonsDiv.children;

    console.log(buttons);

    for (const button of buttons) {
        //assign function handler by name
        button.onclick = clickHandler;
    }
}

function clickHandler(evt) {
    //print out the label/text on the button you click
    //eg. You clicked button "B"
    const btn = evt.target;

    console.log(evt);
    console.log(evt.clientX, evt.clientY);
    console.log(`You clicked the ${btn.textContent} button`);
}
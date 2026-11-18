
window.onload = () => {
    const formElems = document.querySelectorAll("input, select");
    console.log(formElems);

    for (const elem of formElems) {
        elem.onfocus = gainFocus;
        elem.onblur = loseFocus;
    }
}

//two event handlers to manage focus updates
function gainFocus(evt) {
    //change the colors of the focused element
    const elem = evt.target;

    elem.style.backgroundColor = "rgb(255, 227, 161)";
    elem.style.border = "1px solid rgb(193, 162, 90)";
    elem.style.marginLeft = "10px";
    elem.style.transition = "margin-left 0.3s ease-in-out";
}

function loseFocus(evt) {
    const elem = evt.target;

    elem.style.backgroundColor = "white";
    elem.style.border = "";
    elem.style.marginLeft = "";
}
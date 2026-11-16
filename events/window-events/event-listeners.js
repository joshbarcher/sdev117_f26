
window.onload = () => {
    //select our target
    const target = document.querySelector(".target");

    //the last assignment to onclick "wins"
    // target.onclick = () => {
    //     target.style.backgroundColor = "green";
    // }

    // target.onclick = () => {
    //     target.style.scale = "1.25";
    // }

    target.addEventListener("click", () => {
        console.log("event listener #1 called");
        target.style.backgroundColor = "green";
    });

    target.addEventListener("click", () => {
        console.log("event listener #2 called");
        target.style.scale = "1.25";
    });
}
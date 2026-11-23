
window.onload = () => {
    const box = document.querySelector("#box");
    box.onkeypress = (evt) => {
        //console.log(evt.key, "pressed");

        const badSymbols = "~!@#$%^&*()_+`-=[]\{}|;':\",./<>?"

        if (badSymbols.includes(evt.key)) {
            //stops the regular behavior of the event
            evt.preventDefault(); 

            console.log("Bad key!");
        } else {
            console.log("Good key!");
        }
    }

    // let count = 0;
    // setInterval(() => console.log(count++), 1000);
}
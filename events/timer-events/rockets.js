
window.onload = () => {
    const button = document.querySelector("button");
    const output = document.querySelector("#output");

    button.onclick = () => {
        let count = 10;
        const timer = setInterval(() => {
            if (count === 0) {
                //stop the timer
                clearInterval(timer);
                output.innerHTML += `Blast off!<br>`;
                return; //exit
            }

            output.innerHTML += `${count}<br>`;
            count--;
        }, 1000)
    }
}
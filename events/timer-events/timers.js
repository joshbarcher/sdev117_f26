
window.onload = () => {
    //set a few timers
    const output = document.querySelector("#output");

    window.setTimeout(() => {
        output.innerHTML += "Timer #1 - all done - after 1 sec <br>";
    }, 7000);

    window.setTimeout(() => {
        output.innerHTML += "Timer #2 - all done - after 1 sec <br>";
    }, 9000);

    window.setTimeout(() => {
        output.innerHTML += "Timer #3 - all done - after 1 sec <br>";
    }, 4500);

    //generate random numbers, add them together, until their sum is 
    //greater then 10
    let sum = 0;
    const timer = window.setInterval(() => {
        const number = Math.random();
        sum += number; 

        output.innerHTML += `Random number: ${number} <br>`;
        output.innerHTML += `Sum is ${sum} <br>`;
        
        if (sum >= 10) {
            output.innerHTML += "All done <br>";

            //stop the interval
            window.clearInterval(timer);
        }

    }, 1000);
}
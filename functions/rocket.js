completeLaunches();

function completeLaunches() {
    printRocketSchedule();

    launchRocket(10);
    launchRocket(5);
    launchRocket(2);
}

function launchRocket(steps) {
    console.log("Countdown beginning");
    console.log("-".repeat(20));

    for (let i = steps; i >= 1; i--) {
        console.log(i)
    }

    console.log("-".repeat(20));
    console.log("Blast off!");
}

function printRocketSchedule() {
    for (let i = 1; i <= 3; i++) {
        console.log("Planning to launch rocket #", i);
    }
}
let seconds = 00;
let tens = 00;
let mins = 00;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let appendMins = document.getElementById("mins");
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");
let interval;

function startTimer() {
    tens++;

    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }else if (seconds == 0) {
        appendSeconds.innerHTML = "0" + seconds;
    }
    if (seconds > 59) {
        mins++;
        seconds = 0;
        appendMins.innerHTML = mins;
        appendSeconds.innerHTML = seconds;
    }
    if (mins > 9){
        appendMins.innerHTML = mins;
    }else if (mins >= 0 || mins < 10) {
        appendMins.innerHTML = "0" + mins;
    }
}

btnStart.onclick = function () {
    if (interval){
        clearInterval(interval);
    }
    interval = setInterval(startTimer, 10);
};
btnStop.onclick = function () {
    clearInterval(interval);
};
btnReset.onclick = function () {
    clearInterval(interval);
    mins = "00";
    tens = "00";
    seconds = "00";
    appendMins.innerHTML = mins;
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
};
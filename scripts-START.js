const button = document.querySelectorAll('button[data-time]');
const timeLeft = document.querySelector('h1');
let end = document.querySelector("display__end-time");
const userInput = document.querySelector('input');

let timeCounter;
let totalMin;
let remainingSecs;
let minutes;

button.forEach(option => {
    option.addEventListener('click', numbers);
});

userInput.addEventListener('change', displayUserValue);

function displayUserValue() {
    clearInterval(timeCounter);
    let userNum = userInput.value;
    timeLeft.textContent = userInput.value;
    let userSplit = userNum.split(':');
    minutes = parseInt(userSplit[0]);
    seconds = parseInt(userSplit[1]);
    startTimer(minutes, seconds);
}

function numbers() {
    clearInterval(timeCounter);
    userInput.value = '';
    totalMin = this.getAttribute('data-time');

    minutes = Math.floor(totalMin / 60);
    remainingSecs = Math.floor(totalMin % 60);

    minutes < 10 ? minutes = '0' + minutes : minutes;
    remainingSecs < 10 ? remainingSecs = '0' + remainingSecs : remainingSecs;

    timeLeft.textContent = minutes + ':' + remainingSecs;

    startTimer(minutes, remainingSecs);
}

function startTimer(m, s) {
    if (s == 0) {
        s = 59;
        m -= 1;
    }

    timeCounter = setInterval(function () {
        if (s < 0) {
            timeLeft.textContent = 'done!';
            clearInterval(timeCounter);
            return;
        }

        timeLeft.textContent = m + ':' + s;
        s--;

    }, 1000);
}


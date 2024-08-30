const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const millisecondsDisplay = document.querySelector(".milliseconds");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;
let isRunning = false;

function updateDisplay() {
  minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
  millisecondsDisplay.textContent =
    milliseconds < 100 ? `0${milliseconds}` : milliseconds;
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(() => {
      milliseconds += 10;

      if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;

        if (seconds >= 60) {
          seconds = 0;
          minutes++;
        }
      }

      updateDisplay();
    }, 10);
  }
}

function pauseStopwatch() {
  clearInterval(intervalId);
  isRunning = false;
}
function resetStopwatch() {
  clearInterval(intervalId);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}
startBtn.addEventListener("click", startStopwatch);
pauseBtn.addEventListener("click", pauseStopwatch);
resetBtn.addEventListener("click", resetStopwatch);

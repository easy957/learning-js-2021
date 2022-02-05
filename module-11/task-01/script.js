const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

let intervalId = null;
let isRunning = false;

refs.startBtn.addEventListener("click", () => {
  if (isRunning) {
    return;
  }
  intervalId = setInterval(changeBodyColor, 1000);
  isRunning = true;
});

refs.stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  isRunning = false;
});

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeBodyColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
}

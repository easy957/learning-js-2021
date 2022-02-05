const rangeInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const changeFontSize = (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
}
rangeInputEl.addEventListener('input', changeFontSize);

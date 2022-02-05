const valueEl = document.querySelector('#value');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');

let value = valueEl.innerText;

const increment = () => {
  value++;
  valueEl.innerText = value;
}
const decrement = () => {
  value--;
  valueEl.innerText = value;
}

incrementBtnEl.addEventListener('click', increment)
decrementBtnEl.addEventListener('click', decrement)
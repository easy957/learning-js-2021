const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

const changeNameElState = () => {
  if (inputEl.value) {
    nameEl.innerText = inputEl.value;
  } else {
    nameEl.innerText = 'Незнакомец';
  }
}

inputEl.addEventListener('input', changeNameElState);
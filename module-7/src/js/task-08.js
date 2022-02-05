const containerEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input[type="number"]');
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');

console.log(containerEl, inputEl, renderBtnEl, destroyBtnEl);

function createBoxes() {
  const amount = inputEl.value;
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    boxes.push(newBox);
    size += 10;
  }
  console.log(boxes);
  containerEl.append(...boxes);
}

function destroyBoxes() {
  containerEl.innerHTML = '';
}

renderBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);
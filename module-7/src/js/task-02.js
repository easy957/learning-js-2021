const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientsEl = document.querySelector('#ingredients');

const newIngridientsElems = [];
ingredients.forEach(el => {
  const newEl = document.createElement('li');
  newEl.innerText = el;
  newIngridientsElems.push(newEl);
})

ingridientsEl.append(...newIngridientsElems);
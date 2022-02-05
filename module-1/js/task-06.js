let total = 0;
let input;

while (input !== null) {
  input = prompt('Введите число.');
  if (isNaN(Number(input))) {;
    alert('Было введено не число. попробуйте ещё раз.');
  } else {
    total += Number(input);
  }
  
}

alert(`Общая сумма чисел равно ${total}`);

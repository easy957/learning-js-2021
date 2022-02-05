let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число'); 


  if (isNaN(Number(input))) {
      alert('Введено не число, попробуйте ещё раз');
      continue;
    };

  if (input === null) {
    for (number of numbers) {
      total += Number(number);
    };
    console.log(total);
    break;
  };

  numbers.push(input);
};
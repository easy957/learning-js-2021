const credits = 23580;
const pricePerDroid = 3000;

const buyAmount = prompt(`Укажите количество дроидов для покупки. На вашем счету ${credits} кредитов. Цена одного дроида - ${pricePerDroid} кредитов.`);
let message;
const totalPrice = pricePerDroid * buyAmount;

if (buyAmount === null) {
  message = 'Отменено пользователем'
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!'
} else {
  message = `Вы купили ${buyAmount} дроидов. На счету осталось ${credits - totalPrice} кредитов.`
}

alert(message);
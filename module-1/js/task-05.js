let userDelivery = prompt('Введите страну, в которую Вы хотите оформить доставку.');

const china = 100;
const chili = 250;
const australia = 170;
const india = 80;
const jamaica = 120;


switch (userDelivery.toLowerCase()) {
  case 'китай':
    alert(`Доставка в Китай будет стоить ${china} кредитов`);
    break;
  
  case 'чили':
    alert(`Доставка в Чили будет стоить ${chili} кредитов`);
    break;
  
  case 'австралия':
    alert(`Доставка в Австралию будет стоить ${australia} кредитов`);
    break;фывфы
  
  case 'индия':
    alert(`Доставка в Индию будет стоить ${india} кредитов`);
    break;
  
  case 'ямайка':
    alert(`Доставка в Ямайку будет стоить ${jamaica} кредитов`);
    break;
  
  default:
    alert('В вашей стране доставка не доступна.'); 
}


const ADMIN_PASSWORD = '123456';
const userPassword = prompt('Введите пароль.');

let message;

if (userPassword === null) {
  message = 'Отменено пользователем!';
} else if (userPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Отменено пользователем!';
};

alert(message);
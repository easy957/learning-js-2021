let logins = ['abcd', 'test', 'sasha'];
let login = prompt('Введите логин.');

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  };
};

const isLoginUnique = function (allLogins, login) {
  if (!allLogins.concat(' ').includes(login)) {
    return true;
  };
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    alert('Логин не валиден! Введите от 4х до 16ти символов.');
    return;
  }

  if (!isLoginUnique(allLogins, login)) {
    alert('Такой логин уже используется!');
    return;
  }

  logins.push(login);
  console.log(logins);
  alert('Логин успешно добавлен!');
}

addLogin(logins, login);


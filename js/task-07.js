// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає

function savePassword(password) {
  return function (userPassword) {
    return password === userPassword;
  };
}

const checkPassword = savePassword("pass1234");

console.log(checkPassword("pass1234"));
console.log(checkPassword("qwerty"));

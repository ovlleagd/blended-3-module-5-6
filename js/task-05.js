// Найбільше число в масиві
//Дано масив чисел:

const numbers = [10, 25, 48, 7, 32, 18];
//Завдання: Знайдіть найбільше число за допомогою reduce.
//Очікуваний результат:
//48

const result = numbers.reduce((acc, element) => {
  if (element > acc) {
    acc = element;
  }
  return acc;
}, 0);

console.log(result);

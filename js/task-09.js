//Сортування чисел за зростанням
//Дано масив чисел:
const numbers = [5, 2, 9, 1, 5, 6];
//Завдання: Використайте toSorted, щоб відсортувати числа за зростанням.
//Очікуваний результат:

//[1, 2, 5, 5, 6, 9]
const result = numbers.toSorted((a, b) => b - a);
console.log(result);

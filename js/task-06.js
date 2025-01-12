//Згладження вкладеного масиву
//Дано вкладений масив:

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
//Завдання: За допомогою reduce перетворіть вкладений масив у плаский.
//Очікуваний результат:
//[1, 2, 3, 4, 5, 6]

// const newArray = nestedArray.reduce((acc, el) => acc.concat(el), []);

const newArray = nestedArray.reduce((acc, el) => [...acc, ...el], []);

console.log(newArray);

//Сортування рядків за довжиною
//Дано той самий масив рядків:

const words = ["banana", "apple", "grape", "orange", "kiwi"];
//Завдання: Відсортуйте рядки за їхньою довжиною (від найкоротшого до найдовшого).
//Очікуваний результат:

//['kiwi', 'apple', 'grape', 'banana', 'orange']

const result = words.toSorted((a, b) => a.localeCompare(b));
console.log(result);

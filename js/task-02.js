//Підрахунок кількості повторень
//Дано масив:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
//Завдання: Напишіть функцію, яка за допомогою reduce підрахує, скільки разів кожен фрукт зустрічається в масиві.
//Очікуваний результат:
//{
 // apple: 3,
 // banana: 2,
 // orange: 1
//}
function makeObject(array) {
const newObject = array.reduce((acc,elem)=>{
    if(acc[elem]) {
        acc[elem] += 1;
    } else {
        acc[elem] = 1;
    }
    return acc;
},{})
return newObject;
}
console.log(makeObject(fruits));

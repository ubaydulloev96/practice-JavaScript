'use strict';

//  const arr = [1, 4, 5, 67, 78, 66];

//  console.log(arr.length);

//  arr.pop();  // удаляет последний элемент
//  arr.push(10);  // добавляет последний элемент 

// Перебрать элементы массива 1
/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

// Перебрать элементы массива 2
/* for (let value of arr) {
    console.log(value);
} */

/* const arr = [67, 76, 45, 56, 34];

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});  */

/* const str = prompt("", "");
const products = str.split(', ');
products.sort();
//  console.log(products);
console.log(products.join('; ')); */

const num = [12, 32, 4, 43, 3, 2];
//  num.sort();
num.sort(compareNum);
console.log(num);

function compareNum(a, b) {
    return a - b;
}
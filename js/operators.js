'use strict';

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(2 * 4 == '8');
// console.log(2 * 4 === '8');

const isChecked = false,
      isClose = false;
console.log(isChecked || isClose);  // если хотя бы один из аргументов будет true, то вернет true
console.log(isChecked && isClose); // оба должны быть true, если один из них false, то вернет false
console.log(isChecked || !isClose); // ! это оператор отрицания

console.log(5 + 4 * 3 != 18); // != не равен
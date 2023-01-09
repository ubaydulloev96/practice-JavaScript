'use strict';

//  && - и

/* const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Есть в меню');
}
console.log(hamburger && fries); */

/* const hamburger = true;
const fries = false;

if (hamburger && fries) {
    console.log('Есть в меню');
}
console.log(hamburger && fries); */

/* const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
    console.log('Есть в меню');
}
console.log(hamburger && fries); */

/* const hamburger = 2;
const fries = 1;

if (hamburger == 3 && fries) {
    console.log('Все довольны');
} else {
    console.log('Мы уходим в другое заведение');
}
console.log(hamburger == 3 && fries); */

/* const hamburger = 3;
const fries = 1;
const cola = 0;

if (hamburger == 3 && cola === 1 && fries) {
    console.log('Все довольны');
} else {
    console.log('Мы уходим в другое заведение');
}
console.log(hamburger == 3 && cola === 1 && fries); */

/* console.log(1 && 0);
console.log(1 && 5 && 8);
console.log(null && 87);
console.log(0 && 'abc' && null); */

// || - или

/* const hamburger = 0;
const fries = 0;
const cola = 3;

if (hamburger || cola || fries) {
    console.log('Все довольны');
} else {
    console.log('Мы уходим');
}
console.log(hamburger || cola || fries); */

/* const hamburger = 0;
const fries = null;
const cola = 0;

if (hamburger || cola || fries) {
    console.log('Все довольны');
} else {
    console.log('Мы уходим');
}
console.log(hamburger || cola || fries); */

// Комбинация операторов

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны');
} else {
    console.log('Мы уходим');
}
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); */

//  Практика

console.log( NaN || 2 || undefined );
 
console.log( NaN && 2 && undefined );
 
console.log( 1 && 2 && 3 );
 
console.log( !1 && 2 || !3 );
 
console.log( 25 || null && !3 );
 
console.log( NaN || null || !3 || undefined || 5);
 
console.log( NaN || null && !3 && undefined || 5);
 
console.log( 5 === 5 && 3 > 1 || 5);
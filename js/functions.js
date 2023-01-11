'use strict';

// function declaration

/* function showFirstMessage() {
    console.log('Hello World');
}

showFirstMessage(); */

/* function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('Hello world'); */

/* let num = 20;
function showFirstMessage(text) {
    console.log(text);
    num = 50;
}

showFirstMessage('Hello world');
console.log(num); */

/* let num = 20;
function showFirstMessage(text) {
    console.log(text);
    let num = 50;
    console.log(num);
}

showFirstMessage('Hello world');
console.log(num); */

/* let num = 20;
function showFirstMessage(text) {
    console.log(text); 
    console.log(num);
}

showFirstMessage('Hello world');
console.log(num); */

/* function calc(a, b) {
    return (a * b);
}
console.log(calc(5, 11));
console.log(calc(-4, -5)); */

/* function ret() {
    let num = 100;

    //

    return num;
}

// function expression

const anotherNum = ret();
console.log(anotherNum); */

/* const logger = function() {
    console.log('Hello');
};

logger(); */

// Стрелочные функции

const calc = (a, b) => {
    console.log("1");
    return (a + b);
  };

console.log(calc(4, 5));
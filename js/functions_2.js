'use strict';

/* const USD = 70;
const EURO = 73;

function convert(curr, amount) {
    console.log(curr * amount);
}

convert(USD, 500);
convert(EURO, 500); */

// return

/* const USD = 70;
const EURO = 73;
const discount = 0.8;

function convert(curr, amount) {
    return curr * amount;
}

function promotion(result) {
    console.log(discount * result);
}

const res = convert(USD, 500);
promotion(res); */

/* function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) {
            return;
        }
    }
    console.log('Done');
}

test(); */

/* function sayHello(name) {
    return(`Привет, ${name}!`);
}
sayHello('Anton'); */

/* function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}
console.log(returnNeighboringNumbers(5)); */

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(10, 5));

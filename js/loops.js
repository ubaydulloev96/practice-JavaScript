'use strict';

/* let num = 5;

while (num < 11) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
}
while (num <= 60); */

/* for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
} */

/* for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
} */

//  Цикл в цикле

/* for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}
 */

/* let result = '';
const Length = 7;

for (let i = 1; i < Length; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}   
console.log(result); */

/* first: for (let i = 0; i < 5; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) {
                continue first;
            }
            console.log(`Third level: ${k}`);
        }
    }
} */

/* for (let i = 20; i > 10; i--) {
    if (i == 13) {
        break;
    }
    console.log(i);
} */

//  При помощи цикла for выведите чётные числа от 2 до 10 включительно

/* for (let i = 2; i < 10; i += 2) {
    console.log(i);
} */

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(result);
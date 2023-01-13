'use strict';

/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    }
}; */

//  console.log(options.colors.border);

//  delete options.name;

//  console.log(options); 

/* let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for(let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;  // это делается чтобы узнать length у объекта
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter); */

const options = {
    city: 'New York',
    population: 10000,
    square: '778.2 km2',
    country: 'USA',
    mayor: {
        Name: 'Eric',
        family: 'Adams',
        age: 54
    },
    maketest: function() {
        console.log('test');
    }
};
//  options.maketest();
//  console.log(Object.keys(options).length);

// Деструктуризация 

const {Name, family, age} = options.mayor;
console.log(Name, family, age);
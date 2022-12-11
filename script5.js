import SCRIPTS from "./scripts.js";

// let total = 0;
// let count = 1;

// while( count <= 10) {
//     total += count;
//     console.log(total);
//     count+= 1;
//     console.log(count);
// }

// console.log(total);

// 106

function repeat (n, action) {
    for (let i = 0; i < n; i++) {
        action(i)
    }
}

// repeat(5, console.log);

// let labels = [];

// repeat(5, i => {
//     labels.push(`Блок ${i + 1}`);
// });

// console.log(labels[0]);

// function greaterThan(n) {
//     return m => m > n;
// }

// let greaterThan10 = greaterThan(10)

// console.log(greaterThan10(12));

// function noisy(f) {
//     return (...args) => {
//         console.log("вызов для", args);
//         let result = f(...args);
//         console.log("вызов для", args, "возвращает", result);
//     };
// };

// noisy(Math.min)(1,2);

// function unless(test, then) {
//     if (!test) then();
// }

// repeat(5, n => {
//     unless(n % 2 == 1, () => {
//         console.log(n, " - четное число");
//     });
// });

let arrFor = [3, 6, "f", 8, 123];

// arrFor.forEach( l => console.log(l));

// функция оставляет языки кот. еще существуют

function filter(array, test) { // расскрывает что делает filter
    let passed = [];
    for (const element of array) {
        if(test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

// map что делает

// function map(array, transform) {
//     let mapped = [];
//     for (const iterator of array) {
//         mapped.push(transform(iterator))
//     }
//     return mapped;
// }

// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(rtlScripts);
// console.log(map(rtlScripts, s => s.name));

// reduce

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

function addNums (a, b) {
    return a + b
}

// console.log(reduce([1, 3, 4, 6],(a,b) => a + b, 0));

// console.log([1, 2, 3, 4].reduce((a,b) => a + b));

function characterCount(script) { // выводит одним числом диапазан шрифтов
    return script.ranges.reduce((count,[from, to]) => {
        return count + (to - from);
    }, 0);
}

console.log(characterCount(SCRIPTS[0]));


// console.log(SCRIPTS.reduce((a, b) => { // находит самый большой шрифт
//     return characterCount(a) < characterCount(b) ? b : a;
// }));

// аналогичная предыдущей функция без  метода reduce

// let biggest = null;
// for (const script of SCRIPTS) {
//     if (biggest == null || characterCount(biggest) < characterCount(script)) {
//         biggest = script;
//     }
// }

// console.log(biggest);

// ======


// пример

// var obj = {'France': 'Paris', 'Englang': 'London'};
// for (let country of Object.keys(obj)) {
//     var capital = obj[country];
//     console.log(country, capital);
// }

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year)
)));

// console.log(SCRIPTS.map(s => s.year));

console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year)
)));

// это вычисление можно представить в виде цикла

// let total = 0, count = 0;
// for (let script of SCRIPTS) {
//     if (script.living) {
//         total += script.year;
//         count += 1;
//     }
// }

// console.log(Math.round(total / count));

function characterScript(code) {
    for (const script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

// console.log(characterScript(121));

// let horseShoe = "🐴👟";
// console.log(horseShoe.length);
// console.log(horseShoe[0]);
// console.log(horseShoe.charCodeAt(0));
// console.log(horseShoe.codePointAt(0));

// 119

let roseDragon = "🌹🐉";
console.log(roseDragon);
for (const char of roseDragon) {
    console.log(char);
}

function countBy(items, groupName) {
    let counts = [];
    for (const item of items) {
        let name = groupName(item);
        console.log(name);
        let known = counts.findIndex(c => c.name == name);
        console.log(counts.findIndex(c => c.name == name));
        if(known == -1) {
            counts.push({name, count: 1})
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countBy([1, 2, 3], n => n > 2));

// 

// let users = [
//     {id: 1, name: "Vasya"},
//     {id: 2, name: "Petya"},
//     {id: 3, name: "Masha"}
// ]

// console.log(users.findIndex(item => item.id == 3));

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");
    console.log(scripts);

    let total = scripts.reduce((n, {count}) => n + count, 0);
    console.log(total);

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

console.log(textScripts('"wooof", "тяв"'));

// 120
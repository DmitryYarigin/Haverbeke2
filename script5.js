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

arrFor.forEach( l => console.log(l));

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

function characterCount(script) {
    return script.ranges.reduce((count,[from, to]) => {
        return count + (to - from)
    }, 0);
}

console.log(characterCount(SCRIPTS[0]));

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

// 115
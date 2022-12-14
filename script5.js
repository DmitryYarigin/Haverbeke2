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

// console.log(characterCount(SCRIPTS[0]));


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

// function average(array) {
//     return array.reduce((a, b) => a + b) / array.length;
// }

// console.log(Math.round(average(
//     SCRIPTS.filter(s => s.living).map(s => s.year)
// )));

// console.log(SCRIPTS.map(s => s.year));

// console.log(Math.round(average(
//     SCRIPTS.filter(s => !s.living).map(s => s.year)
// )));

// это вычисление можно представить в виде цикла

// let total = 0, count = 0;
// for (let script of SCRIPTS) {
//     if (script.living) {
//         total += script.year;
//         count += 1;
//     }
// }

// console.log(Math.round(total / count));

function characterScript(code) { // определяет шрифт по номеру кода
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

// let roseDragon = "🌹🐉";
// console.log(roseDragon);
// for (const char of roseDragon) {
//     console.log(char);
// // }

function countBy(items, groupName) { // функция принимает коллекцию типа массива
    let counts = [];                 // и функцию и возвращает массив объектов кот.
    for (const item of items) {  
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if(known == -1) {
            counts.push({name, count: 1})
            console.log(counts);
        } else {
            // console.log(counts[known].count);
            counts[known].count++;
        }
    }
    return counts;
}

// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));


// let myfindIndex = [{name: true, count:2},{name: false, count:3}].findIndex(c => c.name == name);

// console.log(myfindIndex);


// 

// let users = [
//     {id: 1, name: "Vasya"},
//     {id: 2, name: "Petya"},
//     {id: 3, name: "Masha"}
// ]

// console.log(users.findIndex(item => item.id == 3));

// function textScripts(text) { // функция показывает какие шрифты и их процент в тексте задействованы
//     let scripts = countBy(text, char => {
//         let script = characterScript(char.codePointAt(0));
//         console.log(script);
//         return script ? script.name : "none";
//     }).filter(({name}) => name != "none"); // тут метод filter кот. отфильтровывает
//     console.log(scripts);

//     let total = scripts.reduce((n, {count}) => n + count, 0); // reduce который сокращает приводя к одному фначению
//     console.log(total);

//     console.log(scripts);
    
//     return scripts.map(({name, count}) => { // map преобразовывает каждый элемент массива
//         return `${Math.round(count * 100 / total)}% ${name}`;
//     }).join(", ");
// }

// console.log(textScripts('"wooof", "тяв"'));

// 120

// упражнения

// ============ 1)

// нужно перевести массивы в массиве в один массив
let myArray = [[1, 2],[3, 4],[5,6]];

// вариант автора 

let newMyArray = myArray.reduce((elem, current) => elem.concat(current), [])


// console.log(newMyArray);

// // нагуглил вариант
// let newArr3 = [];

// myArray.forEach(el => { 
//     newArr3 = newArr3.concat(el);
//     console.log(newArr3);
// })

// console.log(newArr3);

// let myArray46 = myArray.concat(newArr3);

// console.log(myArray46);

// ========= 2)
// написать функцию высшего порядка кот. принимает (значение, функцию условия,
//  функцию обнавления, функцию тела)

// это я пытался 

// function loop (value, funIf) {  //funUpdate, funBody
//     function funIf (val) {
//         let count = 0;
//         if (val == 10) {
//             value ++
//             count ++;
//         }
//     }       
//     return value
// }

// console.log(loop(3, 10));

// вот автор

// function loop(start, test, update, body) {
//     for (let value = start; test(value); value = update(value)) {
//         body(value);
//     }
// }

// loop(3, n => n > 0, n => n - 1, console.log);

// 3) метод every

// function every (array, predicat) { // ну вроде получилось
//     for (const iterator of array) {
//         if(predicat(iterator) == false) return false;
//     }
//     return true;
// }

// console.log(every([1, 2, 3, 4, 5], n => n < 5));

// с методом some

// function every2 (array, predicate) {
//     return !array.some(element => !predicate(element))
// }

// console.log(every2([1, 2, 3, 4, 5], n => n < 5));

// 4) 

function dominantDirection(text) { 
    let counted = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none"); 

    if (counted.length == 0) return "ltr";
    
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("wooof"));

// 124










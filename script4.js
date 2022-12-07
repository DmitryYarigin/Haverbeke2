// ================= массивы объекты =====================

// let doh = "Эгегей";
// console.log(typeof doh.toUpperCase);

// let sequence = [1, 2, 3];
// sequence.push(4);
// sequence.push(5)
// sequence.push(6);
// sequence.pop();
// console.log(sequence.pop());

// let day1 = {
//     squirrel: false,
//     events: ["работал", "трогал дерево"]
// };

// console.log(day1.squirrel);
// console.log(day1.wolf);
// day1.wolf = true;
// console.log(day1.wolf);

// let anObject = {
//     left: 1,
//     right: 2
// };

// delete anObject.left;
// console.log(anObject.left);

// console.log("left" in anObject);

// console.log(Object.keys({x: 0, y: 2}));

// let objectA = {a: 1, b: 2};
// let objectB = {b: 3, c:45};

// Object.assign(objectA, objectB);
// console.log(objectA);

// =========== Дневник оборотня ============
var JOURNAL = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
  ];

// let journal = [];

// функция добавления события в журнал
// function addEntry(events, squirrel) {
//     journal.push({events,squirrel});
// }

// addEntry(["работал", "трогал дерево"], true);

// console.log(journal[0].events);

// функция вычисляющая степень кореляции, коэффицент (перевод формулы)

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
            Math.sqrt((table[2] + table[3]) *
                    (table[0] + table[1]) *
                    (table[1] + table[3]) *
                    (table[0] + table[2])
            )
}

// console.log(phi([76, 9, 4, 1]));

// функция извлекает таблицу для определенного события из журнала (как console.log выше)

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table; 
}

// console.log(tableFor("pizza", JOURNAL));
// стр 91

// for (const entry of JOURNAL) {
//     console.log(`${entry.events.length} событий`);
// }

// Функция находящая все типы событий

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

// console.log(journalEvents(JOURNAL));

// отфильтруем результаты с наибольшей или наименьшей вероятности привратиться в белку

// for(let event of journalEvents(JOURNAL)) {
//     let correlation = phi(tableFor(event, JOURNAL));
//     if (correlation > 0.1 || correlation < -0.1){
//         console.log(event + ":", correlation);
//     }
// }

// проверим если ел арахис и не чистил зубы

// for(let entry of JOURNAL) {
//     if (entry.events.includes("peanuts") &&
//     !entry.events.includes("brushed teeth")) {
//         entry.events.push("арахис-зубы");
//         console.log(entry.events);
//     }
// }

// console.log(tableFor("арахис-зубы",JOURNAL));

//  ======================== КОНЕЦ =======================


// ======= методы массивов и строк ==============
let todoList = [];

function remember(task) { // добавляет задачу в конец списка
    todoList.push(task);
}

function getTask(task) { // получает и удаляет первый элемент из очереди
    return todoList.shift();
}

function rememberUrgently(task) { // добаваляет елемент в начало списка
    todoList.unshift(task);
}

remember("купить продукты");
remember("купить инструменты");

// console.log(todoList);

// getTask();

// console.log(todoList);

// rememberUrgently("сходить на работу");

// console.log(todoList);

// console.log([1, 2, 6, 7, 4, 2].indexOf(2)); // возв. индекс по кот. было найдено заданное значение или -1 если оно не было найдено

// console.log([1, 2, 6, 7, 4, 2].lastIndexOf(2));

// console.log([1, 2, 6, 7, 4, 2].slice(2,4)); // принимает начальный и конечный индексы и возвращает массив содерж. только эти элементы

// console.log([1, 2, 6, 7, 4, 2].slice(2));

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1))
}

// console.log(remove(["a", "b", "c", "d", "e"],2));

// console.log("кокосы".slice(3));
// console.log("кокосы".indexOf("с"));

// console.log("один два три".indexOf("ри"));

// console.log(" окей \n ".trim()); // уберет пробелы

// console.log(String(6).padStart(3, "0")); // добавил элементы

// let sentence = "Птицы-секретари умеют громко топать";
// let words = sentence.split(" ");
// console.log(words);
// console.log(words.join('.')); // join соединяет елементы в строку указанным элементом

// console.log("ЛА".repeat(3)); // repeat повторяет строку несколько раз

// let string = "abc";
// console.log(string.length);
// console.log(string[1]); // string можно использовать и для строк

// ==== дополн. параметры ========

function max (...numbers) { // функция принимает любое количество аргументов
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

// let numbers = [2, 4, 6, 8]; // а тут три точки позволяют использовать массив в кач. аргумента функции
// console.log(max(1, ...numbers, 9));

// // еще позволяет развернуть массив в массиве

// let word = ["никогда", "не пойму"]
// console.log(["я", ...word, "этого"]);

// ======== Math ===========

// function randomPointOnCircle(radius){
//     let angle = Math.random() * 2 * Math.PI;
//     return {x: radius * Math.cos(angle),
//             y: radius * Math.sin(angle)
//     };
// }

// console.log(randomPointOnCircle(2));

// console.log(Math.sin(1));
// console.log(Math.cos(1));
// console.log(Math.random()); 

// console.log(Math.floor(Math.random() * 10));

// console.log(Math.ceil(2.34));
// console.log(Math.round(2.34));
// console.log(Math.abs(-2.34));

// ============== деструктурирование ==============

// function myFun([a1, a2, a3, a4]) { // переменные массива обозначаются для краткости, вместо arr[0]. просто цифры выдают ошибку
//     return a1 + a2 + a3 + a4;
// };

// console.log(myFun([2, 5, 5, 6]));
// ;

// // работает и для объектов

// let {namea, age} = {namea: "Фараджи", age: 23};// также заглядываем внутрь этого значения
// console.log(age);


// =========== JSON ===========

// let string = JSON.stringify({squirrel: false,
//                              events: ["выходной"]});
// // console.log(string);
// console.log(JSON.parse(string).events);

// ============== УПРАЖНЕНИЯ ==============

// 1)

function range (start, end, mult = 1) {
    let arr = [];
    if (mult < 0) {
        console.log(mult);
        for (let i = start; i >= end; i+=mult) {
            arr.push(i);
        }    
    } else {
        for (let i = start; i <= end; i+=mult) {
            arr.push(i);
        }
    }   
    return arr
}

function sum(array) {
    let result = 0;
    for (const iterator of array) {
        result += iterator
    }
    return result
}

// console.log(range(5, 2, -1));

// console.log(sum(range(2, 5, 1)));

// 2)

// function reverseArray (array) { это так метод просто
//     return array.reverse();
// }

let myArr = [1, 2, 3, 4, 5, ];

// console.log(reverseArray(myArr));
// console.log(myArr);

// function revereArray(array) {
//     let newArr = [];
//     for (const iterator of array) {
//         newArr.unshift(iterator); добавили в начало массива
//     };
//     // unshift
//     return newArr;
// };

// вот автор как сделал

function reverseArray(array) {
    let newArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i]);
    }
    return newArr;
}

// console.log(reverseArray(myArr));
// console.log(myArr);

// function revereArrayInPlace(array) { // сортировка какая-то типа пузырька
//     for (let i = 0; i < Math.floor(array.length / 2); i++){
//         let old = array[i]; // сохраняем в переменной значение элемента
//         array[i] = array[array.length - 1 - i]; // меняем элемента на противоположный с конца
//         array[array.length - 1 - i] = old; // а сонца меняем на начальный элемент
//         console.log(array[i]);
//     }
//     return array;
// }


// function revereArrayInPlace(array) { // это я написал по памяти
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//         let old = array[i];
//         array[i] = array[array.length - 1 - i];
//         array[array.length - 1 - i] = old; 
//         console.log(array[i]);
//     }
//     return array
// }

// console.log(revereArrayInPlace(myArr));

// 3)

// function arrayToList (array) { // преобразование массива в список
//     let list = null;
//     for (let i = array.length -1; i >= 0; i--) {
//         list = {value: array[i], rest: list};
//         // console.log(list);   
//     }
//     return list;
// }

// arrayToList([1, 2, 3]);

// function listToArray(list) { // преобразование списка в массив
//     let array = [];
//     for (let node = list; node; node = node.rest) {
//         array.push(node.value);
//         // console.log(list);
//         // console.log(node.rest);
//     }
//     return array;
// }

// listToArray(arrayToList([1, 2, 3]));

// function prepend(value, list) {
//     return {value, rest: list};
// }

// let myList = {
//     obana: 3,
//     val: 5
// }

// // console.log(prepend(10, myList));

// function nth(list, n) {  // рекурсивная функция возвращ. элемент наход. в заданной позиции
//     if (!list) return undefined;
//     else if (n == 0) return list.value;
//     else { 
//         return nth(list.rest, n - 1);
//     }
// }

// console.log(nth(arrayToList([10, 20, 30]), 1));

// 4) глубокое сравнение

let object1 = {
    cat: "Маркиз",
    dog: "Тошка"
}


let object2 = {
    cat: "Маркиз",
    dog: "Тошка"
}

// console.log(object1.cat);

// function deepEquals(a, b) { // я пытался написать
//     if (typeof a == Object ) {
//         console.log("test");
//         for (const i of a) {
//             console.log(a.value);
//             if(a[value] === b[value]) return true;
//             else return false;
//         }
//     }
//     if (a === b) return true;
//     else return false;
// }

console.log(deepEquals(object1, object2));
// console.log(deepEquals(1, 2));


console.log(Object.getOwnPropertyNames(object1));

// нашел в интернете

function deepEquals(a, b) {
    const props1 = Object.getOwnPropertyNames(a);
    const props2 = Object.getOwnPropertyNames(b);

}



























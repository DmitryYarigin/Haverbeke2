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

let journal = [];

// функция добавления события в журнал
function addEntry(events, squirrel) {
    journal.push({events,squirrel});
}

addEntry(["работал", "трогал дерево"], true);

console.log(journal[0].events);

// функция вычисляющая степень кореляции, коэффицент (перевод формулы)

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
            Math.sqrt((table[2] + table[3]) *
                    (table[0] + table[1]) *
                    (table[1] + table[3]) *
                    (table[0] + table[2])
            )
}

console.log(phi([76, 9, 4, 1]));

// стр 91
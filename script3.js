// глава 3 Функции

// const makeNoise = function() {
//     console.log("make noise");
// }

// makeNoise();


// const power = function(base, exponent) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }

//     return result;
// }

// console.log(power(2, 10));


// let x = 10;
// if(true) {
//     let y = 20;
//     var z = 30;
//     console.log(x + y + z);
// }

// console.log(x + y);

// const power = (base, exponent) => {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }

//     return result;
// }

// console.log(power(2, 10));

// const square1 = (x) => { return x * x; };

// const square2 = x => x * x;

// console.log(square2(6));

// const horn = () => {
//     console.log('lalalala');
// }

// horn();

// function power(base, exponent = 2) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;        
//     }
//     return result
// }

// console.log(power(5, 2));



// const scuare = function(x) {
//     return x * x;
// }

// console.log(scuare(5));

// ======================= ЗАМЫКАНИЕ ========================

// function multiplier(factor) {
//     return number => number * factor;
// }

// let twice = multiplier(2);
// console.log(twice(5));

// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter1 = makeCounter();
  
//   console.log(counter1());

// function f() {
//     let value = 123;

//     function g() {alert(value);}

//     return g;
// }

// let g = f();

// console.log(g());

// ======================= РЕКУРСИЯ ========================

// function power (base, exponent) {
//     if (exponent == 0) {
//         return 1;
//     } else {
//         return base * power(base, exponent - 1);}
// }

// console.log(power(2, 3));


// используем условный оператор ?

// function pow(x, n) {
//     return (n == 1) ? x : (x * pow(x, n - 1));
// }

// console.log(pow(3, 3));

// страница 70

// это я сам написал по памяти

// function power (x, n) {
//     if(n == 1) {
//         return x;
//     } else {
//        return x * power(x, n - 1);
//     }
// }

// console.log(power(2, 3));

// пример рекурсии из учебника

// function findSolution(target) { 

//     function find(current, history) { 
//         if (current == target) { 
//             return history; 
//         } 
//         else if (current > target) { 
//             return null; 
//         } else { 
//             console.log(history);
//             return find(current + 5, `(${history} + 5)`) || 
//                     find(current * 3, `(${history} * З)`); 
//         } 
//     }
//     return find(1, "1");
// }

// console.log(findSolution(21));

// function faindSolution(target) {
//     function found(current, history) {
//         if(current == target) {
//             return history;
//         } else if (current > target) {
//             return null
//         } else {
//             console.log(history);
//             return found(current + 5, `(${history} + 5)`) ||
//                    found(current * 3, `(${history} * 3)`);
//         }   
//     }
//     return found(1, "1");
// }

// console.log(faindSolution(32));


// ======== примеры функций: выполняющ. побочный эффект =======

// function printZeroPadderWithLabel(number, label) {
//     let numberString = String(number);
//     console.log(numberString);
//     while (numberString.length < 3) {
//         numberString = "0" + numberString;
//     }
//     console.log(`${numberString} ${label}`);
// }

// function printFarmInventory(cows, chiken, pigs) {
//     printZeroPadderWithLabel(cows, "коров");
//     printZeroPadderWithLabel(chiken, "цыплят");
//     printZeroPadderWithLabel(pigs, "свиней");
// }

// printFarmInventory(7, 5, 11);

// ======== примеры функций: возвращаящая значение =======

// function zeroPad(number, width) {
//     let string = String(number);
//     while (string.length < width) {
//         string = "0" + string;
//     }
//     return string;
// }

// function printFarmInventory(cows, chiken, pigs) {
//     console.log(`${zeroPad(cows, 3)} коров`);
//     console.log(`${zeroPad(chiken, 3)} цыплят`);
//     console.log(`${zeroPad(pigs, 3)} свиней`);
// }

// printFarmInventory(11, 7, 5);

// ================== УПРАЖНЕНИЯ ==================

// 1) создаем функцию

// function minNumber(a, b) {
//     if (a > b) return b;
//     else if ( a == b) return "числа равны";
//     else { 
//         return a
//     };
// }

// console.log(minNumber (-5, -6));

// 2) создаем функцию рекурсивную

function isEven (x) {
    // if (x < 0) {
    //     x = x * (-1);
    //     console.log(x); это было мое решение с отрицательным числом
    // };
    if( x == 1) return false;
    else if ( x == 0) return true;
    else if (x < 0) return isEven(-x); // а это автора
    else {
            return isEven(x - 2);
    }
}


console.log(isEven( -6));

// стр 77













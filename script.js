// let myNumber = 5 % 3
// console.log(myNumber);

// console.log(- (10 -2));
// console.log(3 > 2);
// console.log("Хочется" != "Колется");

// console.log(true && false);
// console.log(true || false);
// console.log(!true);
// console.log(false ? 1 : 2);
// console.log("5" - 1);

// let luigisDebt = 140;
// luigisDebt = luigisDebt - 34;
// console.log(luigisDebt);

// let one = 1, two = 2;
// console.log(one + two);

// prompt("Введите пароль")


// let theNumber = Number(prompt("введите число"));

// if(!Number.isNaN(theNumber)) {
//     console.log("это число является квадратным корнем из " + theNumber * theNumber);
//     console.log(theNumber);
// } else {   
//     console.log("почему не ввели число");
// }

// let num = Number(prompt("введите число"));

// if (num < 10) {
//     console.log("маленькое число");
// } else if (num < 100) {
//     console.log("среднее число");
// } else {
//     console.log("большое число");
// }

// let result = 1;
// let counter = 0;

// do {
//     result *= 2;
//     counter += 1;
//     console.log(result);
//     console.log(`прогнали ${counter} раза`);

// } while (counter < 0);

let yourName;

do {
    yourName = prompt("Кто вы?");

} while (!yourName);

console.log(yourName);

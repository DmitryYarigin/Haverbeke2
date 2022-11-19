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

// let yourName;

// do {
//     yourName = prompt("Кто вы?");

// } while (!yourName);

// console.log(yourName);

// let result = 1;

// for (let counter = 0; counter < 10; counter++) {
//     result *= 2
//     console.log(result);
// }

// for (let current = 20; ; current = current + 1) {
//     if (current % 7 == 0) {
//         console.log(current);
//         break
//     }
    
// }

// switch (prompt("какая сейчас погода?")) {
//     case "дождь": 
//     console.log("возьмите зонт");
//     break;
//     default: 
//     console.log("полгода плохая погода");
// }

// задача 1

// let counter = "#";
// let container = "#";

// for (let i = 0; i < 7; i++) {
//     console.log(container);
//     container += counter;
// }

// // вот как решил автор

// for (let line = "#"; line.length < 8; line += "#"){
//     console.log(line);
// }

// задача 2


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log("Fizz");
//     } if (i % 5 == 0) {
//         console.log("Buzz");
//     } if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log("FizzBuzz");
//     } else {
//         console.log(i);
//     }
// }


// как автор решил

// for (let n = 1; n <= 100; n++) {
//     output = "";
//     if (n % 3 == 0) output = "Fizz";
//     if (n % 5 == 0) output = "Buzz";
//     if ((n % 3 == 0) && (n % 5 == 0)) output = "FizzBuzz";

//     console.log(output || n);
// }

// задача 3

// let var1 = "# ";
// let var2 = " #";
// let var3 = "";
// let var4 = "";

// for (let ib = 0; ib < 8; ib++) {
//     for (let i = 0; i < 8; i++) {
//         var3 += var1;
//     }
//     console.log(var3);
//     var = '';
//     for (let i = 0; i < 8; i++) {
//         var4 += var2;
//     }
//     console.log(var4);
// }

let size = 8;

let boart = ""

for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        if ((x + y) % 2 == 0) {
            boart += " "
        } else {
            boart += "#"
        }
    }
    boart += "\n"
}
console.log(boart);

// страница 59
// глава 3 Функции

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

function power (base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        console.log(power(base, exponent - 1))
        return base * power(base, exponent - 1);}
}

console.log(power(2, 2));

// страница 70


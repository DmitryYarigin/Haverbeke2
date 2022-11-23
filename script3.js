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

// страница 70

// используем условный оператор ?
// function pow(x, n) {
//     return (n == 1) ? x : (x * pow(x, n - 1));
// }

// console.log(pow(3, 3));
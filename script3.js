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

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;        
    }
    return result
}

console.log(power(5, 2));

// страница 68
/* ----- Drawing Cats with function ----- */

const drawCats = function (howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + ' =^.^=');
    }
}

drawCats(10);

/* ---------------------------------------*/

/* ----- Counting ----- */

console.log((15 + 9) * 2);

/* -------------------- */

/* ----- Counting 2 ----- */

let balloons = 100;
balloons*= 2;

let balloonsTwo = 100;
balloonsTwo /= 4;

console.log(balloons);
console.log(balloonsTwo);

/* ---------------------- */

/* ----- Props length ----- */

const first = 'long string and ';
    console.log(first.length);
const second = 'short string =';
    console.log(second.length);
const third = first + second;
    console.log(third + ' ' + third.length);
    
/* ------------------------ */

/* ----- Get element of string ----- */

const firstWord = 'turn',
      secondWord = 'under',
      thirdWord = 'number',
      fourthWord = '!?';
console.log(firstWord[2] + secondWord[0] + thirdWord[0] + fourthWord[0]);

/* --------------------------------- */

/* ----- Get slice of string ----- */

const longString = 'This long string is so long';
console.log(longString.slice(5, 16));

console.log(longString.slice(5));

/* ------------------------------- */
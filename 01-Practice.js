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

/* ----- To Upper Case / To Lower Case ----- */

const mainString = 'hEY, hOW arE YOU?',
	  mainString1 = mainString[0].toUpperCase(),
	  mainString2 = mainString.slice(1).toLowerCase();

console.log(mainString1 + mainString2);

/* ----------------------------------------- */

/* ----- Boolean Values ----- */

	/* && - AND */
	const hadShower = true,
		  hasBackPack = false;
	if (hadShower && hasBackPack) {
		console.log(true);
	} else {
		console.log(false);
	}

	/* || - OR */
	const hasApple = true,
		  hasOrange = false;
	if (hasApple || hasOrange) {
		console.log(true);
	} else {
		console.log(false);
	}

	/* ! - NOT */
	const isWeekend = true,
		  needToShowerToday = !isWeekend;
	console.log(needToShowerToday);

/* -------------------------- */

/* ----- Matching numbers ----- */

const age = 11,
	  accompanied = true;

if (age >= 12 || accompanied === true) {
	console.log('Welcome to the cinema');
} else {
	console.log('Get out of here!');
}

/* ---------------------------- */
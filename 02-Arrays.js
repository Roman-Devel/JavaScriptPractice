/* ----- Create Array and choose ----- */

const dinosaurs = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
    'eighth',
    'ninth'
];

console.log(dinosaurs[1]);

/* ----- Replace an element ----- */

dinosaurs[0] = 'first dino';

console.log(dinosaurs);

/* ----- Array in Array ----- */

const dinosaursAndNumbers = [
    3,
    'dinosaurs',
        [
            'firstDino',
            'secondDino',
            3627.5
        ],
    10
];

console.log(dinosaursAndNumbers[2]);
console.log(dinosaursAndNumbers[2][1]);

/* ----- Search last element of array ----- */

const maniacs = [
    'Ronus',
    'Andrey',
    'Max'
];
console.log(maniacs[0]);
console.log(maniacs[1]);
console.log(maniacs[2]);
    console.log(maniacs.length);
    console.log(maniacs[maniacs.length - 1]);
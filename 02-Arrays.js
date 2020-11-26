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
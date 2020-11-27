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

/* ----- Add and Delete elements in the array ----- */

	/*
	.push() - добавляет элемент в конец массива
	.unshift() - добавляет элемент в начало массива и двигает остальные элементы вперед
	*/
	const fruits = [];
	fruits.push('apple');
	fruits.push('orange');
	fruits.push('lemon');
		console.log(fruits);
		console.log(fruits.length);
	fruits.unshift('banana');
	fruits.unshift('kiwi');
		console.log(fruits);
		console.log(fruits.length);
	/*
	.pop() - удаляет последний элемент из массива и сохраняет значение в новой переменной
	.shift() - удаляет первый элемент из массива и сохраняет значение в новой переменной
	*/
	const lastFruit = fruits.pop();
		console.log(lastFruit);
		console.log(fruits);
	fruits.unshift(lastFruit);
		console.log(fruits);
	const firstFruit = fruits.shift();
		console.log(firstFruit);
		console.log(fruits);

/* ----- Combining Arrays ----- */
	/*
	.concat() - к текущему массиву добавляет в конец массивы в скобках через запятую
	*/
const furryAnimals = ['FirstAnimal', 'SecondAnimal', 'ThirdAnimal'],
	  scalyAnimals = ['FourthAnimal', 'FifthAnimal'],
	  furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals);

const featheredAnimals = ['SixthAnimal', 'SeventhAnimal'],
	  allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log(allAnimals);
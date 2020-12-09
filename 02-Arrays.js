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

/* ----- Searching index of elements ----- */

const colors = ['red', 'blue', 'green'];
	console.log(colors.indexOf('blue'));
	console.log(colors.indexOf('green'));
	console.log(colors.indexOf('purple'));					/* если элемента нет в массиве, метод вернет -1 */
const colors2 = ['yellow', 'gray', 'white', 'yellow'];
	console.log(colors2.indexOf('yellow'));					/* если элемент повторяется, метод вернет позицию ближайшего к началу массива */

/* ----- Convert array to string ----- */

/*
join() - метод, возвращает строку элементов массива через запятую
join(' - ') - добавляет нужный разделитель между элементами
*/

const boringAnomals = ['monkey', 'cat', 'fish', 'bird'];
	console.log(boringAnomals.join());
	console.log(boringAnomals.join(' - '));
	console.log(boringAnomals.join('*'));
	console.log(boringAnomals.join(' and '));

	/* Example */

	// Путь к подруге домой и обратно к себе домой

	const landmarks = [];
	landmarks.push('My home');
	landmarks.push('Way to home');
	landmarks.push('Light');
	landmarks.push('River');
	landmarks.push('Old school');
	landmarks.push('City library');
	landmarks.push("Girlfriend's home");
		console.log(landmarks.pop());
		console.log(landmarks.pop());
		console.log(landmarks.pop());
		console.log(landmarks.pop());
		console.log(landmarks.pop());
		console.log(landmarks.pop());
		console.log(landmarks.pop());

/* ----- Random choose ----- */

/*
Math.random() - возвращает случайное число от 0 до 1. Всегда возвращает < 1 и никогда не возвращает 1.
Math.floor()  - округление числа, просто отбрасывает все знаки после запятой
*/

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));

const 	randomWords = ['Explosive', 'Pencil', 'Baloon', 'Happy'],
		randomIndex = Math.floor(Math.random() * 4);
	console.log(randomWords[randomIndex]);

	/* Example */
	const russianPhrases = [
		'Звучит неплохо',
		'Да, это определенно надо сделать',
		'Не думаю, что это хорошая идея',
		'Может, не сегодня?',
		'Компьютер говорит нет'
	];
	// Мне выпить еще молочного коктейля?
	console.log(russianPhrases[Math.floor(Math.random() * 5)]);
	// Мне пора делать домашнюю работу?
	console.log(russianPhrases[Math.floor(Math.random() * 5)]);
	
	/* Task 1 (1) */
	const bodyPart = ['нос', 'рука', 'ухо', 'шея'],
		  adjective = ['ужасен(-а)', 'вонючий(-ая)', 'унылый(-ая)', 'дурацкий(-ая)'],
		  bodyPartAnimal = ['морда', 'пяточек', 'хвост', 'лапа'],
		  animal = ['собаки', 'лошади', 'обезьяны', 'ящерицы'],

		  randomBodyPart = bodyPart[Math.floor(Math.random() * bodyPart.length)],
		  randomAdjective = adjective[Math.floor(Math.random() * adjective.length)],
		  randomBodyPartAnimal = bodyPartAnimal[Math.floor(Math.random() * bodyPartAnimal.length)],
		  randomAnimal = animal[Math.floor(Math.random() * animal.length)];
	console.log(`У тебя ${randomBodyPart} еще более ${randomAdjective}, чем ${randomBodyPartAnimal} у ${randomAnimal}`);
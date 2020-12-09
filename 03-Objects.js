/*
Object.keys() - метод, возвращающий все ключи объекта в виде массива.
*/

const cat = {
	legs: '3',
	name: 'Lusi',
	color: 'Skin'
}

console.log(Object.keys(cat));

/* ----- Add elements to the object  ----- */

// 1
const cat = {};
cat['legs'] = 3;
cat['name'] = 'Оладушек';
cat['color'] = 'Черепаховый';
	console.log(cat);
// 2
const cat = {};
cat.legs = 3;
cat.name = 'Оладушек';
cat.color = ' Черепаховый';
	console.log(cat);
	console.log(cat.legs);
	console.log(cat.height);			/* Выведет Undefined - потому-что такого ключа не существует */
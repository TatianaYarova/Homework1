// задание 1
let text = "js";
console.log(text.toLocaleUpperCase());

// задание 2

const searchStart = (array, stringSrch) => {
	let newArray = [];
		array.forEach(element => {
		if (element.toLowerCase().startsWith(stringSrch.toLowerCase())) {
			newArray.push(element);
		}
	});
	return newArray;
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// задание 3

console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

// задание 4

let maxNumber = Math.max(52, 53, 49, 77, 21, 32);
console.log(maxNumber);
let minNumber = Math.min(52, 53, 49, 77, 21, 32);
console.log(minNumber);

// задание 5

const consoleRandomInt = (min, max) => {
	let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console.log(consoleRandomInt(1, 10));

// задание 6

const getRandomArrNumbers = (userNumber) => {
	const consoleRandomInt = (min, max) => {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}
	let array = [];
	for (let i = 0; array.length < Math.floor((userNumber / 2)); i++) {
		array.push(consoleRandomInt(0, userNumber));
	}
	console.log(array);
}
getRandomArrNumbers(12);

// задание 7

// const consoleRandomInt = (min, max) => {
// 	let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// const twoIntNumber = (a, b) => {
// 	const consoleRandomInt = (min, max) => {
// 		let rand = min + Math.random() * (max + 1 - min);
// 		return Math.floor(rand);
// 	}
// 	return consoleRandomInt(a, b);
// }

// twoIntNumber(10, 20);


// задание 8

let currentDate = new Date();
console.log(currentDate);

// задание 9

let currentDateNew = new Date();
console.log(`Текущая дата ${currentDateNew}`);
currentDateNew.setDate(currentDateNew.getDate() + 73);
console.log(`Новая дата спустя 73 дня: ${currentDateNew}`);

// задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date(); 
let fullDate = `${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]}`;
let hour = myDate.getHours(); 
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
console.log(fullDate); 
if (minute < 10) { // если минут будет меньше 10,
	minute = "0" + minute; // то перед ними поставим 0
}
if (second < 10) { // если секунд будет меньше 10,
	second = "0" + second; // то перед ними поставим 0
}

console.log(`Время сейчас ${hour}:${minute}:${second}`);





const season = () => {

    let userAnswer = Number(prompt(`Введите число меcяца`));

if (userAnswer === 1 || userAnswer === 2 || userAnswer=== 12) {
       
        alert('Зима');

} else if (userAnswer === 3 || userAnswer === 4 || userAnswer=== 5) { 
       
       alert('Весна');

} else if (userAnswer === 6 || userAnswer === 7 || userAnswer=== 8) {
       
        alert('Лето');

}  else if (userAnswer === 9 || userAnswer === 10 || userAnswer=== 11) { 
       
        alert('Осень');

} else {

        alert('Неверное значение');
 
} 
}

function gameStart() {
	let gameArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	gameArr.sort();
	alert(gameArr);
	questionFristEl = prompt('Чему равнялся первый элемент массива?');
	questionLastEl = prompt('Чему равнялся последний элемент массива?');

		if (gameArr[0].toLowerCase() === questionFristEl.toLowerCase() && gameArr[6].toLowerCase() === questionLastEl.toLowerCase()) {
			alert('Поздравляем! Вы мегамозг.');
		} else if (gameArr[0].toLowerCase() != questionFristEl.toLowerCase() && gameArr[6].toLowerCase() != questionLastEl.toLowerCase()) {
			alert('Всё неправильно');
		} else {
			alert('Вы были близки к победе!');
		}
}










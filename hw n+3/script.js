// Задание 1
let password = '5555';
let question = prompt(`«Введите пароль»`);
(password === question) ? alert(`"Пароль введен верно"`) : alert(`"Пароль введен неправильно"`);

// Задание 2
let c = Number(prompt(`Введите число от 0 до 10`));
(c > 0 && c < 10) ? alert(`«Верно»`) : alert(`«Неверно»`);
// Задание 3
let d = Number(prompt(`Введите число больше 100`));
let e = Number(prompt(`Введите число любое`));
(d > 100 || e > 100) ? alert(`«Верно»`) : alert(`«Неверно»`);
// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
// Задание 5

let monthNumber = Number(prompt(`Введите число месяца`));
switch (monthNumber) {
    case 1:
        alert(`Зима`);
        break;
    case 2:
        alert(`Зима`);
        break;
    case 3:
        alert(`Весна`);
        break;
    case 4:
        alert(`Весна`);
        break;
    case 5:
        alert(`Весна`);
        break;
    case 6:
        alert(`Лето`);
        break;
    case 7:
        alert(`Лето`);
        break;
    case 8:
        alert(`Лето`);
        break;
    case 9:
        alert(`Осень`);
        break;
    case 10:
        alert(`Осень`);
        break;
    case 11:
        alert(`Осень`);
        break;
    case 12:
        alert(`Зима`);
        break;


    default:
        alert(`неизвестно`)
        break;
}







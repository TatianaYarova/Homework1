// Задание 1
let variable = Number(10);
alert(variable);
variable = Number(20);
alert(variable);
//Задание 2
let yearIssue = Number(2007);
alert(`Год Выпуска первого iPhone: ${yearIssue}`);
//Задание 3
let authorJavaScript = String(`Брендан Эйх`);
alert(`Имя создателя языка JavaScript: ${authorJavaScript}`);
//Задание 4
let one = Number(10);
let two = Number(2);
let sum = (one + two);
alert(`Сумма: ${sum}`);
let difference = (one - two);
alert(`Разность: ${difference}`);
let multiplication = (one * two);
alert(`Умножение: ${multiplication}`);
let division = (one / two);
alert(`Деление: ${division}`);
//Задание 5
let result = (2 ** 5);
alert(`Возведение 2 в 5-ю степень: ${result}`);
//Задание 6
let a=Number(9);
let b=Number(2);
let devide=(a%b);
alert(`остаток от деления: ${devide}`);
//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num = ++num ;
num = --num ;
alert(num);
//Задание 8
let age=prompt(`Сколько Вам лет?`);
alert(age);
//Задание 9
const user=
{name:`Tatiana`,age:34,isAdmin:true};
alert(user.name);
alert(user.age);
alert(user.isAdmin);
//Задание 9.1
user[`city of residence`]=true;
alert([`city of residence`]);
//Задание 9.2
user.age=40;
alert(user.age);
//Задание 9.3
delete user[`city of residence`];
//Задание 9.4
let info=prompt(`Какую информацию хотите узнать о пользователе?`);
alert(user[info]);
//Задание 10
let Name=prompt(`Какое Ваше имя?`);
alert(`Привет, ${Name} !`);
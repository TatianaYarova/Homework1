// Задание 1
let i = 0;

while (  i < 2) {
    console.log ("Привет");
 i++;
}
// Задание 2

let a = 1;

while (  a <= 5) {
    console.log (a);
 a++;
}
// Задание 3
let c = 7;

while (  c <=22) {
    console.log (c);
 c++;
}
// Задание 4
const obj = {
    Коля :'200',
    Вася :'300',
    Петя :'400',
};
for (key in obj) {
    if (obj[key]){
        console.log(`${key} -  Зарплата  ${obj[key]} долларов`);
    }
}
// Задание 5
let n = 1000;
let num = 0;
for (; n >=50; n /=2) {
    num++;
}
console.log(n);
console.log(num);
// Задание 6
let friday = 1;
do {
    console.log(`Сегодня пятница, ${friday} число. Необходимо подготовить отчет`);
    friday += 7;
} while (friday <=31);

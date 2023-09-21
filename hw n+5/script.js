// Задание 1
function min(a, b) {
    return a < b ? a: b;
};

console.log(min(8, 4));
console.log(min(6, 6));

// Задание 2
const even = n => !(n % 2);

console.info(even(5));
console.info(even(4));

// Задание 3.1

let square=(number) =>  number * number;
 
console.log(square(5));

// Задание 3.2

// function square(number) { 

//     return number * number; 
// }; 
 
// console.log(square(5));


// Задание 4



function printMessage() {

    let age = prompt("Сколько Вам лет?");

    if (age < 0) {



     console.log("Вы ввели неправильное значение!");
   

    } else if (age < 12)   {

       
     console.log("Привет!");

  
    

    } else {

   
     console.log("Здравствуйте!");
    

    }
}

printMessage();

// Задание 5
const Check = (a, b) => {

    if (isNaN(a) || isNaN(b)){

        return 'Одно или оба значения не являются числом';

    } else {
        return a * b;
    }
}
console.log(Check("9","9"))

// Задание 6
let n = Number(prompt('Введите число'));

function numberUser() {

    if (!isNaN(n)) {

        return n ** 3;
 
       
 
    }
 
      else {
 
        console.log(`Переданный параметр не является числом`);
 
      }
 
 }
 
 console.log (numberUser("n"));

 // Задание 7

 function getRectangleArea() {
    return this.radius * 2 * 3.14;
}
function getRectanglePerimiter() {
   return this.radius * 2 * 3.14; 
}
const circle1={ 
    radius:2,

    getArea: getRectangleArea,
    getPerimiter: getRectanglePerimiter,
}

const circle2={ 
    radius:3,

    getArea: getRectangleArea,
    getPerimiter: getRectanglePerimiter,
}
    console.log(circle1.getArea());
    console.log(circle1.getPerimiter());
    console.log(circle2.getArea());
    console.log(circle2.getPerimiter());

// Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for ( let i = 0; i<numbs.length; i++) {

    if (numbs[i] ==0 ) break;
    console.log(numbs[i]);

}
// Задание 2
// const item = [1, 5, 4, 10, 0, 3];
// console.log(item[4]);

const item = [1, 5, 4, 10, 0, 3];
item.indexOf(4)
console.log(item[4]);

// Задание 3

const numbers = ['1', '3', '5', '10', '20'];
console.log(numbers.join(' '));

// Задание 4

// let arr = [

//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1],

// ]

// Задание 5

const items = [1, 1, 1];
items.push(2, 2, 2);
console.log(items);

// Задание 6

const  numb = [9, 8, 7, 'a', 6, 5];
numb.sort();
console.log(numb);
numb.pop();
console.log(numb);

// Задание 7
let answer = [9, 8, 7, 6, 5];
let search = Number(prompt('Угадайте число и введите его'));
(answer.includes(search)) ? alert('Угадал') : alert('Не угадал');
   

// Задание 8

'abcdef'.split('')

['a', 'b', 'c', 'd', 'e', 'f']

'abcdef'.split('').reverse()

['f', 'e', 'd', 'c', 'b', 'a']

'abcdef'.split('').reverse().join()

'f,e,d,c,b,a'

// Задание 9

 [[1, 2, 3,],[4, 5, 6]];
 
 const nummders1 = [1, 2, 3,];
 const nummders2 = [4, 5, 6];
 const all = [...nummders1, ...nummders2];
 console.log(all);


// Задание 10


const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];
let sum = 0;
 for (let i = 1; i < arr.length; i++) {
   
    sum = arr[i] + arr[i - 1];
   console.log(sum)
}

// Задание 11

// function squareArray(arr) {
//     let squaredArray = arr.map(number => number * number);
//     return squaredArray;
// }
// let inputArray = [1, 2, 3, 4, 5];
// let resultArray = squareArray(inputArray);
// console.log(resultArray);

// Задание 12

function getLengthWords(arr) {
    let lengthArray = arr.map(word => word.length);
    return lengthArray;
}
let inputArray = ['слово', '', 'слог', 'длинное предложение', 'буква'];
let resultArray = getLengthWords(inputArray);
console.log(resultArray);

// Задание 12

function filterPositive(array) {
 return array.filter(number => number < 0)
}
filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);










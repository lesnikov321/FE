//1. Создать скрипт для сложения, вычитания, умножения и деления двух чисел и вывода результатов

let count1 = parseInt(prompt("Введите первое число:"));
let count2 = parseInt(prompt("Введите второе число:"));
let summ = count1 + count2;
let subtraction = count1 - count2;
let multiplication = count1 * count2;
let division = count1 / count2;
let result1 = `Между этими числами возможны такие арифметические операции: 
сложение: ${summ}
вычитание: ${subtraction}
умножение: ${multiplication}
деление: ${division}`;
alert(result1);
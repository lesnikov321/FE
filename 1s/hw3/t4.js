// Определить, является ли число a делителем числа b ? И наоборот. (Дать два ответа)

let firstInt4 = parseInt(prompt("Введите первое число:"));
let secondInt4 = parseInt(prompt("Введите первое число:"));
let del1 = (firstInt4 % secondInt4) === 0 ? `Число ${firstInt4} является делителем числа ${secondInt4}`: `Число ${firstInt4} не является делителем числа ${secondInt4}`;
let del2 = (secondInt4 % firstInt4) === 0 ? `Число ${secondInt4} является делителем числа ${firstInt4}`: `Число ${secondInt4} не является делителем числа ${firstInt4}`;

if (firstInt4 % 1 === 0 && secondInt4 %1 === 0) {
    alert(del1);
    alert(del2);
} else {
    alert("Вы ввели ошибочные данные!");
}
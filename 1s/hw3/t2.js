// Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?

let usersNum2 = parseInt(prompt("Введите двухзначное число:"));
let letsLen = usersNum2.toString().length;


let secondDigit = usersNum2 % 10;
let firstDigit = (usersNum2 - secondDigit) / 10;

if (letsLen === 2) {
    if (firstDigit > secondDigit) {
        alert("Первая цифра больше второй");
    } else if (secondDigit > firstDigit) {
        alert("Вторая цифра больше первой");
    } else if (firstDigit == secondDigit) {
    alert("Первая цифра равна второй");
    } else { 
    alert("Ошибка!");
    }
} else {
    alert("Неверно!");
}




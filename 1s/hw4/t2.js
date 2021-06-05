// Получаем от пользователя число и высчитываем его факториал.


let input2 = prompt("Введите число для расчета факториала:");
let res2 = 1;
if (input2 === null) {
    alert("Зачем вы нажали Cancel?");
} else if (input2.length === 0 || input2 % 1 !== 0) {
    alert("Введите целое число!");
} else {
    for (let i = 1; i <= input2; i++) {
        res2 = res2 * i;
    }
    alert(res2);
}
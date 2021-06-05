// Получить от пользователя число от 0 до 59. Определить в какую четверть часа попадает число

let usersNum1 = parseInt(prompt("Введите число от 0 до 59:"));

switch (true) {
    case usersNum1 > -1 && usersNum1 < 15:
        alert("Выбранное число находится в первой четверти");
        break;
    case usersNum1 > 14 && usersNum1 < 30:
        alert("Выбранное число находится во второй четверти");
        break;
    case usersNum1 > 29 && usersNum1 < 45:
        alert("Выбранное число находится в третьей четверти");
        break;
    case usersNum1 > 44 && usersNum1 < 60:
        alert("Выбранное число находится в четвертой четверти");
        break;

    default: alert("Вы не попали в допустимый диапазон чисел.");
        break;
}
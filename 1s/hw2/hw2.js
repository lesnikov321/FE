// Задача 2:
// Скрипт получает от пользователя заранее неизвестные ему данные. (Пользователь может ввести что угодно)

// - Если данные можно привести к number, то приводите к number прибавляете 100 и выводите в консоль: 
//    Ваш выиграш составил "число которое получилось" 
// - Если нет - выводите в консоль: Сегодня не ваш день.

let usersInput = prompt("Введите данные:");


if (usersInput === null) {
    alert("Сегодня не ваш день")
}
else if (usersInput.length === 0) {
    alert("Сегодня не ваш день")
}
else if (usersInput % 1 === 0) {
    usersInput = parseInt(usersInput) + 100
    alert(`Ваш выигрыш составил: ${usersInput}`)
}
else {
    alert("Сегодня не ваш день")
}




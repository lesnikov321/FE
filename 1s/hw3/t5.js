// Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)

let usersDigit5 = prompt("Введите шестизначное число:");

if (usersDigit5 == null) {
    alert("Зачем вы нажали Cancel?");
} else if (usersDigit5 % 1 === 0 && usersDigit5.length === 6) {
    let sixthDigit5 = usersDigit5 % 10;
    let  tempValue5 = (usersDigit5 - sixthDigit5) / 10;

    let fifthDigit5 = tempValue5 % 10;
    tempValue5 = (tempValue5 - fifthDigit5) / 10;

    let  fourthDigit5 = tempValue5 % 10;
    tempValue5 = (tempValue5 - fourthDigit5) / 10;

    let  thirdDigit5 = tempValue5 % 10;
    tempValue5 = (tempValue5 - thirdDigit5) / 10;

    let  secondDigit5 = tempValue5 % 10;
    tempValue5 = (tempValue5 - secondDigit5) / 10;

    let  firstDigit5 = tempValue5 % 10;
    tempValue5 = (tempValue5 - firstDigit5) / 10;

    if (firstDigit5 === sixthDigit5 && fifthDigit5 === secondDigit5 && fourthDigit5 === thirdDigit5) {
        alert(`Число является зеркальным. Введено: ${usersDigit5}.`);
    } else {
        alert("Число не является зеркальным.");
    }
    
} else {
    alert("Вы ввели ошибочные данные!");
}
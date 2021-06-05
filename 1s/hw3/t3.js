// Дано трехзначное число. 
//  a. Верно ли, что все его цифры одинаковые? 
//  b. Есть ли среди его цифр одинаковые?
//  c. Найдите сумму этих цифр

let usersNum3 = prompt("Введите трехзначное");


if (usersNum3 === null) {
    alert("Зачем вы нажали Cancel?");

} else if (usersNum3.length !== 3) {
    alert("Вы не следуете указаниям!");
}// Проверка на ввод нужного количества символов (цифр)
 else {
    
    let thirdDigit3 = usersNum3 % 10;
    let  tempValue = (usersNum3 - thirdDigit3) / 10;
    
    let  secondDigit3 = tempValue % 10;
    tempValue = (tempValue - secondDigit3) / 10;
    
    let  firstDigit3 = tempValue % 10;
    tempValue = (tempValue - firstDigit3) / 10;
    
    //  a. Верно ли, что все его цифры одинаковые? 
    let a = thirdDigit3 == secondDigit3 && thirdDigit3 == firstDigit3 ? alert("Все цифры равны.") : alert("Число состоит не из повторения одной цифры.");
    
    
    // //  b. Есть ли среди его цифр одинаковые?
    switch (true) {
        case firstDigit3 === secondDigit3 === thirdDigit3:
            alert("Первая, вторая и третья цифра равны");
            break;
        case firstDigit3 === secondDigit3:
            alert("Первая и вторая цифра равны");
            break;
        case firstDigit3 === thirdDigit3:
            alert("Первая и третья цифра равны");
            break;
        case secondDigit3 === thirdDigit3:
            alert("Вторая и третья цифра равны");
            break;
    
        default: alert("Равных цифр нет.");
            break;
    }
    
    
    // //  c. Найдите сумму этих цифр
    let c = thirdDigit3 + secondDigit3 + firstDigit3;
    alert(`Сумма цифр введенного числа равна ${c}`);
}


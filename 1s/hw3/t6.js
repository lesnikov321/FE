let usersInput = prompt("Введите температуру для конвертации:");

if (usersInput === null) {
    alert("Зачем вы нажали Cancel?");
} else if (usersInput.length === 0) {
    alert("Введите значение температуры!");
} else if (usersInput % 1 === 0){
    // Предполагается, что вводиться будут целые числа
    let choice = confirm("Вы говорите по-английски?");
    if (choice) {
        choice = "en";
        let en = (usersInput - 32) * 5 / 9;
        alert(en);
    } else if (!choice){
        choice = "ua";
        let ua = usersInput * 9 / 5 + 32;
        alert(ua);
    }
} else {
    alert("Что-то пошло не так.");
}




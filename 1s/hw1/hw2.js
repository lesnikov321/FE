//2. Создать скрипт который запрашивает у пользователя Name и Nik-name и преобразует эти данные
// в адресс электронной почты в формате Name@Nik-name.gmail.com.
const name = prompt("Введите Ваш Name:");
const nikname = prompt("Введите Ваш Nik-name:");
const result2 = (name+"@" + nikname + ".gmail.com");
alert(result2);
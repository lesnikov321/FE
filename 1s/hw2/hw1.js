// Задача 1:
// Получить от пользователя следующие данные:
//   - Имя.
//   - возраст (меньше 16 = child; меньше 50 = young; 50 и больше = mature);
//   - пол (мужчина - male; женщина - female);
//   - образ жизни (здоровый = healthy; с вредными привычками = harmful) 
//   - образ жизни ребёнка (активный = active; спокойный = calm);

//   Исходя из полученых данных определить пользователя в одну из 4-х групп.

// 1. HighPotential-Man: молодые или взрослые со здоровым образом жизни мужчины
// 2. HighPotential-Woman: молодые или взрослые со здоровым образом жизни женщины
// 3. Potential: активные дети
// 4. OutOfScope: взрослые с вредными привычками

// Программа после сбора и анализа данных должна вывести в консоль привествие по имени и группу в которую попал пользователь.

let usersName = prompt("Введите своё имя:");
let age = parseInt(prompt("Введите Ваш возраст:"));
let gender = "Вы мужского пола?";
let lifestyle = "Вы ведёте здоровый образ жизни?";
let childsLifestyle = "Вы активный ребёнок?";
let usersCategory;

if (age >= 16) {
    lifestyle = confirm(lifestyle);
    gender = confirm(gender);
    if (age >= 50) {
    age = "mature";
    }
    else {
    age = "young";
    }
}
else if (0 < age && age < 16 ) {
    childsLifestyle = confirm(childsLifestyle);
    age = "child";
    if (childsLifestyle === true) {
        childsLifestyle = "active";
        usersCategory = "Potential";
    }   
    else {
        usersCategory = "NotNamed";
        childsLifestyle = "calm";
    } 
};

if (lifestyle === true && gender === true) {
    gender = "male";
    lifestyle = "healthy";
    usersCategory ="HighPotential-Man";
}
else if (lifestyle === true && gender !== true) {
    gender = "female";
    lifestyle = "healthy";
    usersCategory = "HighPotential-Woman";
}
else if (lifestyle === false && (age === "mature" || age === "young")) {
    usersCategory = "OutOfScope";
    lifestyle = "harmful";
};


if (usersName != false && (age === "child" || age  === "mature" || age === "young")) {
    alert(`Здравствуйте, ${usersName}, Вы относитесь к категории людей ${usersCategory}`);
}
else {
    alert("Вы не ввели запрашиваемые данные!")
}
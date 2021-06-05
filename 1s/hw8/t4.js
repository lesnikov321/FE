// Создать массив содержащий данные обьекты.

// 1) отсортировать массив (используя встроенные методы массивов) по возрасту.
// 2) получить 2 массива: males, females используя метод фильтрации массивов
// 3) *. получить сумму годов рождения всех обьектов используя метод reduce (задание для храбрых)

let personen = [person, person2,person3, person4,person5];
let males = [];
let females = [];

// 1)
let sorting = personen.sort((a, b) => b.born - a.born);
// 2)
personen.filter(element => sorts(element));
function sorts(human){
    if (human.gender === "male"){
        males.push(human);
    } else if (human.gender === "female"){
        females.push(human);
    }
}

// document.write(`${males[0].firstName}, ${males[0].born}`)

// 3)

const yearsSum = personen.reduce((a, b) => a + b.born, 0);
// document.write(yearsSum);
